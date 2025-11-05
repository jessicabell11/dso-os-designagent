import React, { useState, useEffect } from 'react';
import { 
  X, 
  Search, 
  CheckCircle, 
  ChevronDown, 
  ChevronUp, 
  Info,
  Filter
} from 'lucide-react';
import { 
  allLevel1Capabilities, 
  flattenCapabilityHierarchy, 
  BusinessCapabilityHierarchy 
} from '../data/businessCapabilitiesData';

interface BusinessCapabilitiesModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCapabilities: string[];
  onCapabilitiesChange: (capabilities: string[]) => void;
}

const BusinessCapabilitiesModal: React.FC<BusinessCapabilitiesModalProps> = ({
  isOpen,
  onClose,
  selectedCapabilities,
  onCapabilitiesChange
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedCapabilities, setExpandedCapabilities] = useState<Record<string, boolean>>({});
  const [activeCategory, setActiveCategory] = useState<'core' | 'enabling'>('core');
  const [selectedCapabilityIds, setSelectedCapabilityIds] = useState<string[]>([]);
  const [showInfoPanel, setShowInfoPanel] = useState<boolean>(false);
  const [selectedCapabilityForInfo, setSelectedCapabilityForInfo] = useState<BusinessCapabilityHierarchy | null>(null);
  const [filterLevel, setFilterLevel] = useState<number | null>(null);
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState<boolean>(false);

  // Initialize expanded state for all level 1 capabilities
  useEffect(() => {
    const initialExpandedState: Record<string, boolean> = {};
    allLevel1Capabilities.forEach(capability => {
      initialExpandedState[capability.id] = false;
    });
    setExpandedCapabilities(initialExpandedState);
  }, []);

  // Update selected capabilities when props change
  useEffect(() => {
    setSelectedCapabilityIds(selectedCapabilities);
  }, [selectedCapabilities]);

  if (!isOpen) return null;

  const handleCapabilityToggle = (capabilityId: string) => {
    setSelectedCapabilityIds(prev => {
      const isSelected = prev.includes(capabilityId);
      return isSelected
        ? prev.filter(id => id !== capabilityId)
        : [...prev, capabilityId];
    });
  };

  const handleExpandToggle = (capabilityId: string) => {
    setExpandedCapabilities(prev => ({
      ...prev,
      [capabilityId]: !prev[capabilityId]
    }));
  };

  const handleSave = () => {
    onCapabilitiesChange(selectedCapabilityIds);
    onClose();
  };

  const handleCancel = () => {
    setSelectedCapabilityIds(selectedCapabilities);
    onClose();
  };

  const handleShowInfo = (capability: BusinessCapabilityHierarchy, event: React.MouseEvent) => {
    // Stop propagation to prevent toggling the capability selection
    event.stopPropagation();
    setSelectedCapabilityForInfo(capability);
    setShowInfoPanel(true);
  };

  const handleCloseInfoPanel = () => {
    setShowInfoPanel(false);
    setSelectedCapabilityForInfo(null);
  };

  const handleFilterLevelChange = (level: number | null) => {
    setFilterLevel(level);
    setIsFilterDropdownOpen(false);
  };

  const toggleFilterDropdown = () => {
    setIsFilterDropdownOpen(prev => !prev);
  };

  const getFilteredCapabilities = () => {
    let filteredCapabilities = allLevel1Capabilities.filter(
      capability => capability.category === activeCategory
    );

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const allCapabilities = flattenCapabilityHierarchy(filteredCapabilities);
      
      // Filter all capabilities by search query
      const matchingCapabilities = allCapabilities.filter(
        capability => 
          capability.name.toLowerCase().includes(query) || 
          capability.domain.toLowerCase().includes(query) ||
          (capability.description && capability.description.toLowerCase().includes(query))
      );
      
      // Get all parent IDs to ensure we show the full path
      const relevantIds = new Set<string>();
      matchingCapabilities.forEach(capability => {
        relevantIds.add(capability.id);
        if (capability.parentId) {
          let currentParentId = capability.parentId;
          while (currentParentId) {
            relevantIds.add(currentParentId);
            const parent = allCapabilities.find(cap => cap.id === currentParentId);
            currentParentId = parent?.parentId || '';
          }
        }
      });
      
      // Filter level 1 capabilities that have matching children or are matches themselves
      filteredCapabilities = filteredCapabilities.filter(capability => {
        return relevantIds.has(capability.id);
      });
      
      // Expand all capabilities that have matching children
      const newExpandedState = { ...expandedCapabilities };
      relevantIds.forEach(id => {
        newExpandedState[id] = true;
      });
      setExpandedCapabilities(newExpandedState);
    }

    if (filterLevel !== null) {
      const allCapabilities = flattenCapabilityHierarchy(filteredCapabilities);
      const matchingCapabilities = allCapabilities.filter(
        capability => capability.level === filterLevel
      );
      
      // Get all parent IDs to ensure we show the full path
      const relevantIds = new Set<string>();
      matchingCapabilities.forEach(capability => {
        relevantIds.add(capability.id);
        if (capability.parentId) {
          let currentParentId = capability.parentId;
          while (currentParentId) {
            relevantIds.add(currentParentId);
            const parent = allCapabilities.find(cap => cap.id === currentParentId);
            currentParentId = parent?.parentId || '';
          }
        }
      });
      
      // Filter level 1 capabilities that have matching children or are matches themselves
      filteredCapabilities = filteredCapabilities.filter(capability => {
        return relevantIds.has(capability.id);
      });
      
      // Expand all capabilities that have matching children
      const newExpandedState = { ...expandedCapabilities };
      relevantIds.forEach(id => {
        newExpandedState[id] = true;
      });
      setExpandedCapabilities(newExpandedState);
    }

    return filteredCapabilities;
  };

  const renderCapability = (capability: BusinessCapabilityHierarchy, depth: number = 0) => {
    const hasChildren = capability.children && capability.children.length > 0;
    const isExpanded = expandedCapabilities[capability.id];
    const isSelected = selectedCapabilityIds.includes(capability.id);
    
    // Determine background color based on level
    let bgColorClass = '';
    let textColorClass = '';
    
    switch (capability.level) {
      case 1: // Dark blue
        bgColorClass = isSelected ? 'bg-blue-800' : 'bg-blue-700';
        textColorClass = 'text-white';
        break;
      case 2: // Medium blue
        bgColorClass = isSelected ? 'bg-blue-600' : 'bg-blue-500';
        textColorClass = 'text-white';
        break;
      case 3: // Light blue
        bgColorClass = isSelected ? 'bg-blue-400' : 'bg-blue-300';
        textColorClass = 'text-gray-800';
        break;
      default:
        bgColorClass = isSelected ? 'bg-blue-100' : 'bg-white';
        textColorClass = 'text-gray-800';
    }

    return (
      <div key={capability.id} className="mb-2">
        <div 
          className={`p-3 rounded-md ${bgColorClass} ${textColorClass} transition-colors`}
          style={{ marginLeft: `${depth * 16}px` }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center flex-1">
              {hasChildren && (
                <button
                  onClick={() => handleExpandToggle(capability.id)}
                  className="mr-2 p-1 rounded-full hover:bg-white hover:bg-opacity-20"
                  type="button"
                >
                  {isExpanded ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </button>
              )}
              <div className="flex-1">
                <div className="flex items-center">
                  <span 
                    className="font-medium cursor-pointer"
                    onClick={() => handleCapabilityToggle(capability.id)}
                  >
                    {capability.name}
                  </span>
                  <button
                    onClick={(e) => handleShowInfo(capability, e)}
                    className="ml-2 p-1 rounded-full hover:bg-white hover:bg-opacity-20"
                    title="View capability details"
                    type="button"
                  >
                    <Info className="h-4 w-4" />
                  </button>
                </div>
                {capability.description && (
                  <p className="text-xs mt-1 opacity-80 line-clamp-1">{capability.description}</p>
                )}
              </div>
            </div>
            <div className="flex items-center">
              <div 
                className={`h-5 w-5 rounded-full flex items-center justify-center cursor-pointer ${
                  isSelected ? 'bg-white text-blue-700' : 'border border-white'
                }`}
                onClick={() => handleCapabilityToggle(capability.id)}
              >
                {isSelected && <CheckCircle className="h-4 w-4" />}
              </div>
            </div>
          </div>
        </div>
        
        {hasChildren && isExpanded && (
          <div className="mt-2">
            {capability.children!.map(child => renderCapability(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-6xl w-full max-h-[90vh] flex flex-col">
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-900">Business Capabilities</h2>
          <button
            onClick={handleCancel}
            className="text-gray-400 hover:text-gray-500"
            type="button"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="flex flex-1 overflow-hidden">
          <div className="flex-1 flex flex-col overflow-hidden">
            <div className="p-4 border-b border-gray-200">
              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex-1">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="Search capabilities..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                
                <div className="flex rounded-md shadow-sm">
                  <button
                    onClick={() => setActiveCategory('core')}
                    className={`px-4 py-2 text-sm font-medium rounded-l-md ${
                      activeCategory === 'core'
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                    }`}
                    type="button"
                  >
                    Core
                  </button>
                  <button
                    onClick={() => setActiveCategory('enabling')}
                    className={`px-4 py-2 text-sm font-medium rounded-r-md ${
                      activeCategory === 'enabling'
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                    }`}
                    type="button"
                  >
                    Enabling
                  </button>
                </div>
                
                <div className="relative">
                  <button
                    onClick={toggleFilterDropdown}
                    className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    type="button"
                  >
                    <Filter className="h-4 w-4 mr-1" />
                    {filterLevel ? `Level ${filterLevel}` : 'Filter by Level'}
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </button>
                  
                  {isFilterDropdownOpen && (
                    <div className="absolute mt-1 w-48 bg-white shadow-lg rounded-md border border-gray-200 z-10">
                      <div className="py-1">
                        <button
                          onClick={() => handleFilterLevelChange(1)}
                          className={`block w-full text-left px-4 py-2 text-sm ${filterLevel === 1 ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'}`}
                          type="button"
                        >
                          Level 1 (Dark Blue)
                        </button>
                        <button
                          onClick={() => handleFilterLevelChange(2)}
                          className={`block w-full text-left px-4 py-2 text-sm ${filterLevel === 2 ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'}`}
                          type="button"
                        >
                          Level 2 (Medium Blue)
                        </button>
                        <button
                          onClick={() => handleFilterLevelChange(3)}
                          className={`block w-full text-left px-4 py-2 text-sm ${filterLevel === 3 ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'}`}
                          type="button"
                        >
                          Level 3 (Light Blue)
                        </button>
                        <button
                          onClick={() => handleFilterLevelChange(null)}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                          type="button"
                        >
                          Clear Filter
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="flex items-center">
                  <span className="text-sm text-gray-500 mr-2">Selected:</span>
                  <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                    {selectedCapabilityIds.length}
                  </span>
                </div>
              </div>
              
              <div className="mt-2 flex items-center text-sm text-gray-500">
                <div className="flex items-center mr-4">
                  <div className="w-3 h-3 bg-blue-700 rounded-sm mr-1"></div>
                  <span>Level 1</span>
                </div>
                <div className="flex items-center mr-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-sm mr-1"></div>
                  <span>Level 2</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-300 rounded-sm mr-1"></div>
                  <span>Level 3</span>
                </div>
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4">
              <div className="space-y-4">
                {getFilteredCapabilities().map(capability => renderCapability(capability))}
                
                {getFilteredCapabilities().length === 0 && (
                  <div className="text-center py-8">
                    <p className="text-gray-500">No capabilities found matching your search.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {showInfoPanel && selectedCapabilityForInfo && (
            <div className="w-80 border-l border-gray-200 p-4 overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-900">Capability Details</h3>
                <button
                  onClick={handleCloseInfoPanel}
                  className="text-gray-400 hover:text-gray-500"
                  type="button"
                >
                  <X size={18} />
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Name</h4>
                  <p className="mt-1 text-sm text-gray-900">{selectedCapabilityForInfo.name}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Level</h4>
                  <p className="mt-1 text-sm text-gray-900">{selectedCapabilityForInfo.level}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Category</h4>
                  <p className="mt-1 text-sm text-gray-900 capitalize">{selectedCapabilityForInfo.category}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Domain</h4>
                  <p className="mt-1 text-sm text-gray-900">{selectedCapabilityForInfo.domain}</p>
                </div>
                
                {selectedCapabilityForInfo.description && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Description</h4>
                    <p className="mt-1 text-sm text-gray-900">{selectedCapabilityForInfo.description}</p>
                  </div>
                )}
                
                <div className="pt-4">
                  <button
                    onClick={() => handleCapabilityToggle(selectedCapabilityForInfo.id)}
                    className={`w-full inline-flex justify-center items-center px-4 py-2 border ${
                      selectedCapabilityIds.includes(selectedCapabilityForInfo.id)
                        ? 'border-red-300 text-red-700 bg-red-50 hover:bg-red-100'
                        : 'border-blue-300 text-blue-700 bg-blue-50 hover:bg-blue-100'
                    } rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                    type="button"
                  >
                    {selectedCapabilityIds.includes(selectedCapabilityForInfo.id) ? (
                      <>
                        <X className="h-4 w-4 mr-1" />
                        Remove Selection
                      </>
                    ) : (
                      <>
                        <CheckCircle className="h-4 w-4 mr-1" />
                        Select Capability
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="px-6 py-4 border-t border-gray-200 flex justify-end">
          <button
            onClick={handleCancel}
            className="px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mr-3"
            type="button"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            type="button"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessCapabilitiesModal;
