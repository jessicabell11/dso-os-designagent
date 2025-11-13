import { BusinessCapability } from '../types';

// Define the hierarchical structure of business capabilities
export interface BusinessCapabilityHierarchy {
  id: string;
  name: string;
  level: 1 | 2 | 3;
  category: 'core' | 'enabling';
  domain: string;
  description?: string;
  parentId?: string;
  children?: BusinessCapabilityHierarchy[];
}

// Level 3 capabilities for Aggregated Supply Network Planning
const level3AggregatedSupplyNetworkPlanningCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'aggregated-demand-supply-balancing',
    name: 'Aggregated Demand and Supply Balancing',
    level: 3,
    category: 'core',
    domain: 'Supply Chain',
    parentId: 'aggregated-supply-network-planning',
    description: 'Balancing aggregated demand and supply across the network'
  },
  {
    id: 'cmo-planning',
    name: 'CMO Planning',
    level: 3,
    category: 'core',
    domain: 'Supply Chain',
    parentId: 'aggregated-supply-network-planning',
    description: 'Planning for Contract Manufacturing Organizations'
  },
  {
    id: 'crop-planning',
    name: 'Crop Planning',
    level: 3,
    category: 'core',
    domain: 'Supply Chain',
    parentId: 'aggregated-supply-network-planning',
    description: 'Planning for crop production and harvesting'
  },
  {
    id: 'demand-allocation',
    name: 'Demand Allocation',
    level: 3,
    category: 'core',
    domain: 'Supply Chain',
    parentId: 'aggregated-supply-network-planning',
    description: 'Allocating demand across the supply network'
  },
  {
    id: 'rough-cut-capacity-planning',
    name: 'Rough Cut Capacity, Pro-duction & Campaign Planning',
    level: 3,
    category: 'core',
    domain: 'Supply Chain',
    parentId: 'aggregated-supply-network-planning',
    description: 'High-level capacity planning for production and campaigns'
  },
  {
    id: 'volume-based-allocation',
    name: 'Volume-based Allocation and Bottleneck Management',
    level: 3,
    category: 'core',
    domain: 'Supply Chain',
    parentId: 'aggregated-supply-network-planning',
    description: 'Managing allocation based on volume and addressing bottlenecks'
  }
];

// Level 3 capabilities for Collaborative Planning, Forecasting and Replenishment (CPFR)
const level3CPFRCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'collaborative-forecasting',
    name: 'Collaborative forecasting and promotion planning',
    level: 3,
    category: 'core',
    domain: 'Supply Chain',
    parentId: 'cpfr',
    description: 'Collaborative approach to forecasting and planning promotions with partners'
  },
  {
    id: 'deviations-analysis',
    name: 'Deviations analysis and performance assessment',
    level: 3,
    category: 'core',
    domain: 'Supply Chain',
    parentId: 'cpfr',
    description: 'Analyzing deviations and assessing performance in collaborative planning'
  },
  {
    id: 'order-stock-monitoring',
    name: 'Order, stock and PoS monitoring',
    level: 3,
    category: 'core',
    domain: 'Supply Chain',
    parentId: 'cpfr',
    description: 'Monitoring orders, stock levels, and point of sale data'
  },
  {
    id: 'replenishment-vmi',
    name: 'Replenishment (VMI, MTF)',
    level: 3,
    category: 'core',
    domain: 'Supply Chain',
    parentId: 'cpfr',
    description: 'Managing replenishment through Vendor Managed Inventory and other methods'
  }
];

// Level 3 capabilities for Demand Planning
const level3DemandPlanningCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'collaborative-demand-planning',
    name: 'Collaborative Demand Planning',
    level: 3,
    category: 'core',
    domain: 'Supply Chain',
    parentId: 'demand-planning',
    description: 'Planning demand collaboratively with partners and stakeholders'
  },
  {
    id: 'consensus-demand-planning',
    name: 'Consensus Demand Planning',
    level: 3,
    category: 'core',
    domain: 'Supply Chain',
    parentId: 'demand-planning',
    description: 'Developing consensus-based demand plans across functions'
  },
  {
    id: 'statistical-forecasting',
    name: 'Statistical Forecasting',
    level: 3,
    category: 'core',
    domain: 'Supply Chain',
    parentId: 'demand-planning',
    description: 'Using statistical methods to forecast demand'
  }
];

// Level 3 capabilities for Demand Sensing and Shaping
const level3DemandSensingShapingCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'demand-analysis-prediction',
    name: 'Demand Analysis & Prediction',
    level: 3,
    category: 'core',
    domain: 'Supply Chain',
    parentId: 'demand-sensing-shaping',
    description: 'Analyzing and predicting demand patterns'
  },
  {
    id: 'demand-supply-matching',
    name: 'Demand to Supply Matching',
    level: 3,
    category: 'core',
    domain: 'Supply Chain',
    parentId: 'demand-sensing-shaping',
    description: 'Matching demand signals with supply capabilities'
  }
];

// Level 3 capabilities for Detailed Supply Network Planning
const level3DetailedSupplyNetworkPlanningCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'material-requirements-planning',
    name: '(Demand-driven) Material Requirements Planning (MRP/DDMRP)',
    level: 3,
    category: 'core',
    domain: 'Supply Chain',
    parentId: 'detailed-supply-network-planning',
    description: 'Planning material requirements based on demand signals'
  },
  {
    id: 'finite-capacity-planning',
    name: 'Finite Capacity Planning',
    level: 3,
    category: 'core',
    domain: 'Supply Chain',
    parentId: 'detailed-supply-network-planning',
    description: 'Planning production with consideration of finite capacity constraints'
  },
  {
    id: 'master-production-scheduling',
    name: 'Master Production Scheduling and Campaign Planning',
    level: 3,
    category: 'core',
    domain: 'Supply Chain',
    parentId: 'detailed-supply-network-planning',
    description: 'Scheduling production and planning campaigns'
  },
  {
    id: 'order-based-allocation',
    name: 'Order Based Allocation Management',
    level: 3,
    category: 'core',
    domain: 'Supply Chain',
    parentId: 'detailed-supply-network-planning',
    description: 'Managing allocation based on specific orders'
  },
  {
    id: 'replenishment-planning',
    name: 'Replenishment Planning & Distribution Resource Planning (DRP)',
    level: 3,
    category: 'core',
    domain: 'Supply Chain',
    parentId: 'detailed-supply-network-planning',
    description: 'Planning replenishment and distribution resources'
  }
];

// Level 2 capabilities for Supply Chain Resource Planning & Alignment
const level2SupplyChainCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'aggregated-supply-network-planning',
    name: 'Aggregated Supply Network Planning',
    level: 2,
    category: 'core',
    domain: 'Supply Chain',
    parentId: 'supply-chain-resource-planning-alignment',
    description: 'Planning supply network at an aggregated level',
    children: level3AggregatedSupplyNetworkPlanningCapabilities
  },
  {
    id: 'cmo-collaboration',
    name: 'CMO Collaboration',
    level: 2,
    category: 'core',
    domain: 'Supply Chain',
    parentId: 'supply-chain-resource-planning-alignment',
    description: 'Collaborating with Contract Manufacturing Organizations',
    children: []
  },
  {
    id: 'cpfr',
    name: 'Collaborative Planning, Forecasting and Replenishment (CPFR)',
    level: 2,
    category: 'core',
    domain: 'Supply Chain',
    parentId: 'supply-chain-resource-planning-alignment',
    description: 'Collaborative approach to planning, forecasting, and replenishment',
    children: level3CPFRCapabilities
  },
  {
    id: 'demand-planning',
    name: 'Demand Planning',
    level: 2,
    category: 'core',
    domain: 'Supply Chain',
    parentId: 'supply-chain-resource-planning-alignment',
    description: 'Planning for customer demand',
    children: level3DemandPlanningCapabilities
  },
  {
    id: 'demand-sensing-shaping',
    name: 'Demand Sensing and Shaping',
    level: 2,
    category: 'core',
    domain: 'Supply Chain',
    parentId: 'supply-chain-resource-planning-alignment',
    description: 'Sensing and shaping demand patterns',
    children: level3DemandSensingShapingCapabilities
  },
  {
    id: 'detailed-supply-network-planning',
    name: 'Detailed Supply Network Planning',
    level: 2,
    category: 'core',
    domain: 'Supply Chain',
    parentId: 'supply-chain-resource-planning-alignment',
    description: 'Detailed planning of the supply network',
    children: level3DetailedSupplyNetworkPlanningCapabilities
  }
];

// Level 3 capabilities for Collections & Dispute Management
const level3CollectionsDisputeCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'collections',
    name: 'Collections',
    level: 3,
    category: 'core',
    domain: 'Finance',
    parentId: 'collections-dispute-management',
    description: 'Managing the collection of outstanding payments from customers'
  },
  {
    id: 'dispute-management',
    name: 'Dispute Management',
    level: 3,
    category: 'core',
    domain: 'Finance',
    parentId: 'collections-dispute-management',
    description: 'Managing and resolving payment disputes with customers'
  }
];

// Level 3 capabilities for Credit Management
const level3CreditManagementCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'credit-limit-management',
    name: 'Credit Limit Management',
    level: 3,
    category: 'core',
    domain: 'Finance',
    parentId: 'credit-management',
    description: 'Managing and setting credit limits for customers'
  },
  {
    id: 'financial-solution-development',
    name: 'Financial Solution Development',
    level: 3,
    category: 'core',
    domain: 'Finance',
    parentId: 'credit-management',
    description: 'Developing financial solutions for customers'
  }
];

// Level 2 capabilities for Bill to Cash Management
const level2BillToCashCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'account-receivables-management',
    name: 'Account Receivables Management',
    level: 2,
    category: 'core',
    domain: 'Finance',
    parentId: 'bill-to-cash-management',
    description: 'Managing accounts receivable and customer payments',
    children: []
  },
  {
    id: 'collections-dispute-management',
    name: 'Collections & Dispute Management',
    level: 2,
    category: 'core',
    domain: 'Finance',
    parentId: 'bill-to-cash-management',
    description: 'Managing collections and resolving payment disputes',
    children: level3CollectionsDisputeCapabilities
  },
  {
    id: 'credit-management',
    name: 'Credit Management',
    level: 2,
    category: 'core',
    domain: 'Finance',
    parentId: 'bill-to-cash-management',
    description: 'Managing customer credit and financial solutions',
    children: level3CreditManagementCapabilities
  }
];

// Level 2 capabilities for Corporate Controlling
const level2CorporateControllingCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'financial-forecasting',
    name: 'Financial Forecasting',
    level: 2,
    category: 'core',
    domain: 'Finance',
    parentId: 'corporate-controlling',
    description: 'Predicting future financial performance based on historical data and market trends',
    children: []
  },
  {
    id: 'financial-reporting',
    name: 'Financial Reporting',
    level: 2,
    category: 'core',
    domain: 'Finance',
    parentId: 'corporate-controlling',
    description: 'Creating and distributing financial statements and reports for internal and external stakeholders',
    children: []
  },
  {
    id: 'sustainability-reporting',
    name: 'Sustainability Reporting & Steering',
    level: 2,
    category: 'core',
    domain: 'Finance',
    parentId: 'corporate-controlling',
    description: 'Reporting on and guiding sustainability initiatives and their financial impacts',
    children: []
  }
];

// Level 3 capabilities for Financial Accounting
const level3FinancialAccountingCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'budgeting-management',
    name: 'Budgeting Management',
    level: 3,
    category: 'core',
    domain: 'Finance',
    parentId: 'financial-accounting',
    description: 'Managing the budgeting process and budget allocation'
  },
  {
    id: 'closing-consolidation-management',
    name: 'Closing & Consolidation Management',
    level: 3,
    category: 'core',
    domain: 'Finance',
    parentId: 'financial-accounting',
    description: 'Managing the financial closing process and consolidation of financial statements'
  },
  {
    id: 'cost-management',
    name: 'Cost Management',
    level: 3,
    category: 'core',
    domain: 'Finance',
    parentId: 'financial-accounting',
    description: 'Managing and controlling costs across the organization'
  },
  {
    id: 'finance-policies-procedures',
    name: 'Finance Policies and Procedures',
    level: 3,
    category: 'core',
    domain: 'Finance',
    parentId: 'financial-accounting',
    description: 'Developing and maintaining finance policies and procedures'
  },
  {
    id: 'fixed-asset-accounting',
    name: 'Fixed Asset Accounting',
    level: 3,
    category: 'core',
    domain: 'Finance',
    parentId: 'financial-accounting',
    description: 'Managing and accounting for fixed assets'
  },
  {
    id: 'general-accounting',
    name: 'General Accounting',
    level: 3,
    category: 'core',
    domain: 'Finance',
    parentId: 'financial-accounting',
    description: 'Managing general ledger and accounting operations'
  },
  {
    id: 'internal-controls-financial-statement',
    name: 'Internal Controls over Financial Statement',
    level: 3,
    category: 'core',
    domain: 'Finance',
    parentId: 'financial-accounting',
    description: 'Implementing and maintaining internal controls for financial reporting'
  },
  {
    id: 'spend-management',
    name: 'Spend Management',
    level: 3,
    category: 'core',
    domain: 'Finance',
    parentId: 'financial-accounting',
    description: 'Managing and optimizing organizational spending'
  }
];

// Level 3 capabilities for Financial Performance Management
const level3FinancialPerformanceManagementCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'cost-reporting',
    name: 'Cost Reporting',
    level: 3,
    category: 'core',
    domain: 'Finance',
    parentId: 'financial-performance-management',
    description: 'Reporting on cost metrics and performance'
  },
  {
    id: 'financial-performance-reporting',
    name: 'Financial Performance Reporting',
    level: 3,
    category: 'core',
    domain: 'Finance',
    parentId: 'financial-performance-management',
    description: 'Reporting on overall financial performance metrics'
  },
  {
    id: 'financial-planning-forecasting',
    name: 'Financial Planning and Forecasting',
    level: 3,
    category: 'core',
    domain: 'Finance',
    parentId: 'financial-performance-management',
    description: 'Planning and forecasting financial performance'
  },
  {
    id: 'strategic-planning-target-setting',
    name: 'Strategic Planning & Target Setting',
    level: 3,
    category: 'core',
    domain: 'Finance',
    parentId: 'financial-performance-management',
    description: 'Setting financial targets and aligning with strategic plans'
  }
];

// Level 3 capabilities for Internal Control System
const level3InternalControlSystemCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'internal-controls-management',
    name: 'Internal Controls Management',
    level: 3,
    category: 'core',
    domain: 'Finance',
    parentId: 'internal-control-system',
    description: 'Managing internal controls across the organization'
  }
];

// Level 3 capabilities for Management Accounting
const level3ManagementAccountingCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'intercompany-accounting',
    name: 'Intercompany Accounting',
    level: 3,
    category: 'core',
    domain: 'Finance',
    parentId: 'management-accounting',
    description: 'Managing accounting between related companies or business units'
  },
  {
    id: 'product-cost-accounting',
    name: 'Product Cost Accounting',
    level: 3,
    category: 'core',
    domain: 'Finance',
    parentId: 'management-accounting',
    description: 'Accounting for costs associated with product development and production'
  },
  {
    id: 'project-accounting',
    name: 'Project Accounting',
    level: 3,
    category: 'core',
    domain: 'Finance',
    parentId: 'management-accounting',
    description: 'Accounting for costs and revenues associated with specific projects'
  },
  {
    id: 'revenue-accounting',
    name: 'Revenue Accounting',
    level: 3,
    category: 'core',
    domain: 'Finance',
    parentId: 'management-accounting',
    description: 'Accounting for revenue recognition and management'
  },
  {
    id: 'service-accounting',
    name: 'Service Accounting',
    level: 3,
    category: 'core',
    domain: 'Finance',
    parentId: 'management-accounting',
    description: 'Accounting for costs and revenues associated with services'
  },
  {
    id: 'value-flow-accounting',
    name: 'Value Flow Accounting',
    level: 3,
    category: 'core',
    domain: 'Finance',
    parentId: 'management-accounting',
    description: 'Accounting for the flow of value through the organization'
  }
];

// Level 3 capabilities for Payments & Bank Accounting
const level3PaymentsBankAccountingCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'bank-accounting',
    name: 'Bank Accounting',
    level: 3,
    category: 'core',
    domain: 'Finance',
    parentId: 'payments-bank-accounting',
    description: 'Managing bank accounts and reconciliations'
  },
  {
    id: 'payments',
    name: 'Payments',
    level: 3,
    category: 'core',
    domain: 'Finance',
    parentId: 'payments-bank-accounting',
    description: 'Managing payment processes and transactions'
  }
];

// Level 3 capabilities for Taxes
const level3TaxesCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'tax-accounting',
    name: 'Tax Accounting',
    level: 3,
    category: 'core',
    domain: 'Finance',
    parentId: 'taxes',
    description: 'Accounting for tax liabilities and assets'
  },
  {
    id: 'tax-audit-controversy',
    name: 'Tax Audit & Controversy',
    level: 3,
    category: 'core',
    domain: 'Finance',
    parentId: 'taxes',
    description: 'Managing tax audits and controversies'
  },
  {
    id: 'tax-compliance',
    name: 'Tax Compliance',
    level: 3,
    category: 'core',
    domain: 'Finance',
    parentId: 'taxes',
    description: 'Ensuring compliance with tax laws and regulations'
  },
  {
    id: 'tax-master-data',
    name: 'Tax Master Data',
    level: 3,
    category: 'core',
    domain: 'Finance',
    parentId: 'taxes',
    description: 'Managing tax-related master data'
  },
  {
    id: 'tax-strategy-planning',
    name: 'Tax Strategy & Planning',
    level: 3,
    category: 'core',
    domain: 'Finance',
    parentId: 'taxes',
    description: 'Developing and implementing tax strategies'
  },
  {
    id: 'transfer-pricing',
    name: 'Transfer Pricing',
    level: 3,
    category: 'core',
    domain: 'Finance',
    parentId: 'taxes',
    description: 'Managing transfer pricing between related entities'
  }
];

// Level 3 capabilities for Treasury Management
const level3TreasuryManagementCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'financial-risk-management',
    name: 'Financial Risk Management',
    level: 3,
    category: 'core',
    domain: 'Finance',
    parentId: 'treasury-management',
    description: 'Managing financial risks such as currency, interest rate, and liquidity risks'
  },
  {
    id: 'investment-management',
    name: 'Investment Management',
    level: 3,
    category: 'core',
    domain: 'Finance',
    parentId: 'treasury-management',
    description: 'Managing investments and investment portfolios'
  }
];

// Level 2 capabilities for Finance Management
const level2FinanceManagementCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'financial-accounting',
    name: 'Financial Accounting',
    level: 2,
    category: 'core',
    domain: 'Finance',
    parentId: 'finance-management',
    description: 'Managing financial accounting processes and reporting',
    children: level3FinancialAccountingCapabilities
  },
  {
    id: 'financial-performance-management',
    name: 'Financial Performance Management',
    level: 2,
    category: 'core',
    domain: 'Finance',
    parentId: 'finance-management',
    description: 'Managing and reporting on financial performance',
    children: level3FinancialPerformanceManagementCapabilities
  },
  {
    id: 'internal-control-system',
    name: 'Internal Control System',
    level: 2,
    category: 'core',
    domain: 'Finance',
    parentId: 'finance-management',
    description: 'Implementing and maintaining internal control systems',
    children: level3InternalControlSystemCapabilities
  },
  {
    id: 'management-accounting',
    name: 'Management Accounting',
    level: 2,
    category: 'core',
    domain: 'Finance',
    parentId: 'finance-management',
    description: 'Managing accounting for internal decision-making',
    children: level3ManagementAccountingCapabilities
  },
  {
    id: 'payments-bank-accounting',
    name: 'Payments & Bank Accounting',
    level: 2,
    category: 'core',
    domain: 'Finance',
    parentId: 'finance-management',
    description: 'Managing payments and bank accounting processes',
    children: level3PaymentsBankAccountingCapabilities
  },
  {
    id: 'tax-management',
    name: 'Tax Management',
    level: 2,
    category: 'core',
    domain: 'Finance',
    parentId: 'finance-management',
    description: 'Managing tax compliance and planning',
    children: []
  },
  {
    id: 'taxes',
    name: 'Taxes',
    level: 2,
    category: 'core',
    domain: 'Finance',
    parentId: 'finance-management',
    description: 'Managing various tax-related processes and compliance',
    children: level3TaxesCapabilities
  },
  {
    id: 'treasury',
    name: 'Treasury',
    level: 2,
    category: 'core',
    domain: 'Finance',
    parentId: 'finance-management',
    description: 'Managing treasury operations',
    children: []
  },
  {
    id: 'treasury-management',
    name: 'Treasury Management',
    level: 2,
    category: 'core',
    domain: 'Finance',
    parentId: 'finance-management',
    description: 'Managing cash, investments, and financial risks',
    children: level3TreasuryManagementCapabilities
  }
];

// Level 1 Core Capabilities (dark blue boxes)
export const level1CoreCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'bill-to-cash-management',
    name: 'Bill to Cash Management',
    level: 1,
    category: 'core',
    domain: 'Finance',
    description: 'Capabilities related to billing and cash management processes',
    children: level2BillToCashCapabilities
  },
  {
    id: 'corporate-controlling',
    name: 'Corporate Controlling',
    level: 1,
    category: 'core',
    domain: 'Finance',
    description: 'Capabilities related to corporate financial controlling',
    children: level2CorporateControllingCapabilities
  },
  {
    id: 'finance-management',
    name: 'Finance Management',
    level: 1,
    category: 'core',
    domain: 'Finance',
    description: 'Capabilities related to financial management',
    children: level2FinanceManagementCapabilities
  },
  {
    id: 'supply-chain-resource-planning-alignment',
    name: 'Supply Chain Resource Planning & Alignment',
    level: 1,
    category: 'core',
    domain: 'Supply Chain',
    description: 'Capabilities related to supply chain resource planning and alignment',
    children: level2SupplyChainCapabilities
  }
  // Other level 1 capabilities would be added here
];

// Level 1 Enabling Capabilities - now empty as we're using a single list
export const level1EnablingCapabilities: BusinessCapabilityHierarchy[] = [];

// Combine all level 1 capabilities
export const allLevel1Capabilities = [...level1CoreCapabilities, ...level1EnablingCapabilities];

// Function to flatten the hierarchical structure for selection purposes
export const flattenCapabilityHierarchy = (
  capabilities: BusinessCapabilityHierarchy[]
): BusinessCapabilityHierarchy[] => {
  let flattened: BusinessCapabilityHierarchy[] = [];
  
  capabilities.forEach(capability => {
    flattened.push(capability);
    
    if (capability.children && capability.children.length > 0) {
      flattened = [...flattened, ...flattenCapabilityHierarchy(capability.children)];
    }
  });
  
  return flattened;
};

// Get all capabilities in a flat structure
export const allFlattenedCapabilities = flattenCapabilityHierarchy(allLevel1Capabilities);

// Legacy code for backward compatibility
export const coreCapabilities: BusinessCapability[] = [
  // After Sales Management
  {
    id: 'after-sales-service',
    name: 'After Sales Service',
    category: 'core',
    domain: 'After Sales',
    description: 'Providing service and support after the sale'
  },
  {
    id: 'warranty-management',
    name: 'Warranty Management',
    category: 'core',
    domain: 'After Sales',
    description: 'Managing product warranties and claims'
  },
  
  // Bill to Cash Management
  {
    id: 'billing',
    name: 'Billing',
    category: 'core',
    domain: 'Finance',
    description: 'Creating and sending invoices to customers'
  },
  {
    id: 'accounts-receivable',
    name: 'Accounts Receivable',
    category: 'core',
    domain: 'Finance',
    description: 'Managing money owed by customers'
  },
  
  // More capabilities can be added here as needed
];

// Enabling capabilities - now empty as we're using a single list
export const enablingCapabilities: BusinessCapability[] = [];

// All capabilities combined
export const allBusinessCapabilities = [...coreCapabilities, ...enablingCapabilities];

// Get capabilities by domain
export const getCapabilitiesByDomain = (domain: string) => {
  return allBusinessCapabilities.filter(capability => capability.domain === domain);
};

// Get unique domains
export const getUniqueDomains = (category: 'core' | 'enabling' | 'all' = 'all') => {
  let capabilities = allBusinessCapabilities;
  
  if (category !== 'all') {
    capabilities = allBusinessCapabilities.filter(capability => capability.category === category);
  }
  
  return [...new Set(capabilities.map(capability => capability.domain))];
};
