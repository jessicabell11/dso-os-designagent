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

// Level 3 capabilities for Business Concepts & Vision Development
const level3BusinessConceptsCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'digital-new-business-models',
    name: 'Digital/New Business Models',
    level: 3,
    category: 'core',
    domain: 'Innovation',
    parentId: 'business-concepts-vision-development',
    description: 'Developing digital and new business models for innovation and growth'
  }
];

// Level 3 capabilities for Corporate Transformation
const level3CorporateTransformationCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'mergers-acquisitions-management',
    name: 'Mergers & Acquisitions Management',
    level: 3,
    category: 'core',
    domain: 'Innovation',
    parentId: 'corporate-transformation',
    description: 'Managing mergers and acquisitions processes and integration'
  },
  {
    id: 'organizational-change-management',
    name: 'Organizational Change Management',
    level: 3,
    category: 'core',
    domain: 'Innovation',
    parentId: 'corporate-transformation',
    description: 'Managing organizational change processes and adoption'
  },
  {
    id: 'transition-transformation-management-1',
    name: 'Transition & Transformation Management',
    level: 3,
    category: 'core',
    domain: 'Innovation',
    parentId: 'corporate-transformation',
    description: 'Managing transition and transformation processes'
  },
  {
    id: 'transition-transformation-management-2',
    name: 'Transition & Transformation Management ',
    level: 3,
    category: 'core',
    domain: 'Innovation',
    parentId: 'corporate-transformation',
    description: 'Additional aspects of managing transition and transformation processes'
  }
];

// Level 3 capabilities for Innovation Management
const level3InnovationManagementCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'discovery-enablement',
    name: 'Discovery Enablement',
    level: 3,
    category: 'core',
    domain: 'Innovation',
    parentId: 'innovation-management',
    description: 'Enabling discovery processes for innovation'
  },
  {
    id: 'external-innovation-collaboration',
    name: 'External Innovation Collaboration',
    level: 3,
    category: 'core',
    domain: 'Innovation',
    parentId: 'innovation-management',
    description: 'Collaborating with external partners for innovation'
  },
  {
    id: 'innovation-methodology',
    name: 'Innovation Methodology',
    level: 3,
    category: 'core',
    domain: 'Innovation',
    parentId: 'innovation-management',
    description: 'Developing and applying innovation methodologies'
  },
  {
    id: 'process-innovation',
    name: 'Process Innovation',
    level: 3,
    category: 'core',
    domain: 'Innovation',
    parentId: 'innovation-management',
    description: 'Innovating business processes for efficiency and effectiveness'
  },
  {
    id: 'product-innovation',
    name: 'Product Innovation',
    level: 3,
    category: 'core',
    domain: 'Innovation',
    parentId: 'innovation-management',
    description: 'Innovating products and services'
  },
  {
    id: 'technology-engineering-innovation',
    name: 'Technology & Engineering Innovation',
    level: 3,
    category: 'core',
    domain: 'Innovation',
    parentId: 'innovation-management',
    description: 'Innovating technology and engineering solutions'
  }
];

// Level 2 capabilities for Corporate Transformation & Innovation
const level2CorporateTransformationInnovationCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'business-concepts-vision-development',
    name: 'Business Concepts & Vision Development',
    level: 2,
    category: 'core',
    domain: 'Innovation',
    parentId: 'corporate-transformation-innovation',
    description: 'Developing business concepts and vision for future growth',
    children: level3BusinessConceptsCapabilities
  },
  {
    id: 'corporate-transformation',
    name: 'Corporate Transformation',
    level: 2,
    category: 'core',
    domain: 'Innovation',
    parentId: 'corporate-transformation-innovation',
    description: 'Managing corporate transformation initiatives',
    children: level3CorporateTransformationCapabilities
  },
  {
    id: 'innovation-management',
    name: 'Innovation Management',
    level: 2,
    category: 'core',
    domain: 'Innovation',
    parentId: 'corporate-transformation-innovation',
    description: 'Managing innovation processes and initiatives',
    children: level3InnovationManagementCapabilities
  }
];

// Level 3 capabilities for Customer Service
const level3CustomerServiceCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'customer-issue-resolution',
    name: 'Customer Issue Resolution',
    level: 3,
    category: 'core',
    domain: 'Customer Service',
    parentId: 'customer-service',
    description: 'Resolving customer issues and complaints effectively'
  },
  {
    id: 'customer-service-analytics',
    name: 'Customer Service Analytics',
    level: 3,
    category: 'core',
    domain: 'Customer Service',
    parentId: 'customer-service',
    description: 'Analyzing customer service data to improve performance and customer satisfaction'
  },
  {
    id: 'customer-service-operations-management-1',
    name: 'Customer Service Operations Management',
    level: 3,
    category: 'core',
    domain: 'Customer Service',
    parentId: 'customer-service',
    description: 'Managing day-to-day customer service operations'
  },
  {
    id: 'customer-service-operations-management-2',
    name: 'Customer Service Operations Management ',
    level: 3,
    category: 'core',
    domain: 'Customer Service',
    parentId: 'customer-service',
    description: 'Additional aspects of managing customer service operations'
  },
  {
    id: 'customer-service-strategy-development-1',
    name: 'Customer Service Strategy Development',
    level: 3,
    category: 'core',
    domain: 'Customer Service',
    parentId: 'customer-service',
    description: 'Developing strategies to improve customer service'
  },
  {
    id: 'customer-service-strategy-development-2',
    name: 'Customer Service Strategy Development ',
    level: 3,
    category: 'core',
    domain: 'Customer Service',
    parentId: 'customer-service',
    description: 'Additional aspects of developing customer service strategies'
  },
  {
    id: 'individualized-customer-service',
    name: 'Individualized Customer Service & Support',
    level: 3,
    category: 'core',
    domain: 'Customer Service',
    parentId: 'customer-service',
    description: 'Providing personalized service and support to customers'
  },
  {
    id: 'predictive-prescriptive-solution',
    name: 'Predictive & Prescriptive Solution Offering',
    level: 3,
    category: 'core',
    domain: 'Customer Service',
    parentId: 'customer-service',
    description: 'Offering solutions based on predictive and prescriptive analytics'
  }
];

// Level 2 capabilities for Customer Service Management
const level2CustomerServiceCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'customer-service',
    name: 'Customer Service',
    level: 2,
    category: 'core',
    domain: 'Customer Service',
    parentId: 'customer-service-management',
    description: 'Providing service and support to customers',
    children: level3CustomerServiceCapabilities
  }
];

// Level 3 capabilities for Advanced Analytics
const level3AdvancedAnalyticsCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'advanced-statistical-analysis',
    name: 'Advanced Statistical Analysis',
    level: 3,
    category: 'core',
    domain: 'Data',
    parentId: 'advanced-analytics',
    description: 'Using complex statistical methods to analyze data and derive insights'
  },
  {
    id: 'augmented-analytics',
    name: 'Augmented Analytics',
    level: 3,
    category: 'core',
    domain: 'Data',
    parentId: 'advanced-analytics',
    description: 'Using AI and ML to enhance analytics processes and insights discovery'
  },
  {
    id: 'data-exploration',
    name: 'Data Exploration',
    level: 3,
    category: 'core',
    domain: 'Data',
    parentId: 'advanced-analytics',
    description: 'Exploring data to discover patterns, trends, and relationships'
  },
  {
    id: 'data-mining',
    name: 'Data Mining',
    level: 3,
    category: 'core',
    domain: 'Data',
    parentId: 'advanced-analytics',
    description: 'Extracting patterns and knowledge from large datasets'
  },
  {
    id: 'prescriptive-analytics',
    name: 'Prescriptive Analytics',
    level: 3,
    category: 'core',
    domain: 'Data',
    parentId: 'advanced-analytics',
    description: 'Using analytics to recommend actions based on predicted outcomes'
  },
  {
    id: 'real-time-analytics',
    name: 'Real-Time Analytics',
    level: 3,
    category: 'core',
    domain: 'Data',
    parentId: 'advanced-analytics',
    description: 'Analyzing data as it is created for immediate insights and actions'
  }
];

// Level 3 capabilities for AI & ML
const level3AIMLCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'ai-ethics',
    name: 'AI Ethics (Responsible AI)',
    level: 3,
    category: 'core',
    domain: 'Data',
    parentId: 'ai-ml',
    description: 'Ensuring ethical use of AI through responsible development and deployment practices'
  },
  {
    id: 'cognitive-recognition',
    name: 'Cognitive Recognition',
    level: 3,
    category: 'core',
    domain: 'Data',
    parentId: 'ai-ml',
    description: 'Using AI to recognize patterns, objects, speech, and other cognitive tasks'
  },
  {
    id: 'computer-vision',
    name: 'Computer Vision',
    level: 3,
    category: 'core',
    domain: 'Data',
    parentId: 'ai-ml',
    description: 'Enabling computers to derive meaningful information from digital images and videos'
  },
  {
    id: 'machine-learning',
    name: 'Machine Learning',
    level: 3,
    category: 'core',
    domain: 'Data',
    parentId: 'ai-ml',
    description: 'Developing algorithms that can learn from and make predictions on data'
  },
  {
    id: 'model-management',
    name: 'Model Management',
    level: 3,
    category: 'core',
    domain: 'Data',
    parentId: 'ai-ml',
    description: 'Managing the lifecycle of machine learning models from development to deployment'
  },
  {
    id: 'natural-language-processing',
    name: 'Natural Language Processing',
    level: 3,
    category: 'core',
    domain: 'Data',
    parentId: 'ai-ml',
    description: 'Processing and analyzing natural language data to enable human-computer interaction'
  },
  {
    id: 'robotics',
    name: 'Robotics',
    level: 3,
    category: 'core',
    domain: 'Data',
    parentId: 'ai-ml',
    description: 'Designing, building, and operating robots using AI and ML technologies'
  }
];

// Level 3 capabilities for Business Intelligence & Insights
const level3BusinessIntelligenceCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'data-storytelling',
    name: 'Data Storytelling',
    level: 3,
    category: 'core',
    domain: 'Data',
    parentId: 'business-intelligence',
    description: 'Communicating insights from data through compelling narratives'
  },
  {
    id: 'data-visualization',
    name: 'Data Visualization',
    level: 3,
    category: 'core',
    domain: 'Data',
    parentId: 'business-intelligence',
    description: 'Creating visual representations of data to communicate insights effectively'
  },
  {
    id: 'reporting-dashboarding',
    name: 'Reporting & Dashboarding',
    level: 3,
    category: 'core',
    domain: 'Data',
    parentId: 'business-intelligence',
    description: 'Creating reports and dashboards to monitor and analyze business performance'
  },
  {
    id: 'self-service-analytics',
    name: 'Self-Service Analytics',
    level: 3,
    category: 'core',
    domain: 'Data',
    parentId: 'business-intelligence',
    description: 'Enabling users to access and analyze data without IT assistance'
  }
];

// Level 3 capabilities for Data Engineering
const level3DataEngineeringCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'batch-data-processing',
    name: 'Batch Data Processing',
    level: 3,
    category: 'core',
    domain: 'Data',
    parentId: 'data-engineering',
    description: 'Processing large volumes of data in batches'
  },
  {
    id: 'data-virtualization',
    name: 'Data Virtualization',
    level: 3,
    category: 'core',
    domain: 'Data',
    parentId: 'data-engineering',
    description: 'Creating virtual views of data from multiple sources without physical movement'
  },
  {
    id: 'data-warehousing',
    name: 'Data Warehousing',
    level: 3,
    category: 'core',
    domain: 'Data',
    parentId: 'data-engineering',
    description: 'Designing and managing data warehouses for analytics and reporting'
  },
  {
    id: 'data-wrangling',
    name: 'Data Wrangling',
    level: 3,
    category: 'core',
    domain: 'Data',
    parentId: 'data-engineering',
    description: 'Transforming and mapping data from raw formats to more useful formats'
  },
  {
    id: 'real-time-data-processing',
    name: 'Real-Time Data Processing',
    level: 3,
    category: 'core',
    domain: 'Data',
    parentId: 'data-engineering',
    description: 'Processing data in real-time as it is generated'
  }
];

// Level 3 capabilities for Data Ingestion
const level3DataIngestionCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'batch-data-ingestion',
    name: 'Batch Data Ingestion',
    level: 3,
    category: 'core',
    domain: 'Data',
    parentId: 'data-ingestion',
    description: 'Ingesting data in batches from various sources'
  },
  {
    id: 'data-replication',
    name: 'Data Replication',
    level: 3,
    category: 'core',
    domain: 'Data',
    parentId: 'data-ingestion',
    description: 'Replicating data across different systems and environments'
  },
  {
    id: 'identification-data-source',
    name: 'Identification of Data Source',
    level: 3,
    category: 'core',
    domain: 'Data',
    parentId: 'data-ingestion',
    description: 'Identifying and cataloging sources of data for ingestion'
  },
  {
    id: 'stream-data-ingestion',
    name: 'Stream Data Ingestion',
    level: 3,
    category: 'core',
    domain: 'Data',
    parentId: 'data-ingestion',
    description: 'Ingesting data in real-time streams from various sources'
  }
];

// Level 3 capabilities for Data Management
const level3DataManagementCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'applied-data-valuation',
    name: 'Applied Data Valuation',
    level: 3,
    category: 'core',
    domain: 'Data',
    parentId: 'data-management',
    description: 'Assessing and determining the value of data assets'
  },
  {
    id: 'data-governance-stewardship',
    name: 'Data Governance & Data Stewardship',
    level: 3,
    category: 'core',
    domain: 'Data',
    parentId: 'data-management',
    description: 'Establishing policies, procedures, and standards for data management'
  },
  {
    id: 'data-lifecycle-management-1',
    name: 'Data Lifecycle Management',
    level: 3,
    category: 'core',
    domain: 'Data',
    parentId: 'data-management',
    description: 'Managing data throughout its lifecycle from creation to archival or deletion'
  },
  {
    id: 'data-lifecycle-management-2',
    name: 'Data Lifecycle Management ',
    level: 3,
    category: 'core',
    domain: 'Data',
    parentId: 'data-management',
    description: 'Additional aspects of managing data throughout its lifecycle'
  },
  {
    id: 'data-lineage',
    name: 'Data Lineage',
    level: 3,
    category: 'core',
    domain: 'Data',
    parentId: 'data-management',
    description: 'Tracking the origin and transformation of data throughout its lifecycle'
  },
  {
    id: 'data-quality-management',
    name: 'Data Quality Management',
    level: 3,
    category: 'core',
    domain: 'Data',
    parentId: 'data-management',
    description: 'Ensuring data meets quality standards for accuracy, completeness, and consistency'
  },
  {
    id: 'data-security-management-1',
    name: 'Data Security Management for Analytical Purposes',
    level: 3,
    category: 'core',
    domain: 'Data',
    parentId: 'data-management',
    description: 'Securing data used for analytics while maintaining accessibility'
  },
  {
    id: 'data-security-management-2',
    name: 'Data Security Management for Analytical Purposes ',
    level: 3,
    category: 'core',
    domain: 'Data',
    parentId: 'data-management',
    description: 'Additional aspects of securing data for analytical purposes'
  },
  {
    id: 'data-workflow-support',
    name: 'Data Workflow Support',
    level: 3,
    category: 'core',
    domain: 'Data',
    parentId: 'data-management',
    description: 'Supporting workflows for data processing and analysis'
  },
  {
    id: 'document-management',
    name: 'Document Management',
    level: 3,
    category: 'core',
    domain: 'Data',
    parentId: 'data-management',
    description: 'Managing documents and document-based data'
  },
  {
    id: 'enabling-impact-analysis',
    name: 'Enabling Impact Analysis',
    level: 3,
    category: 'core',
    domain: 'Data',
    parentId: 'data-management',
    description: 'Analyzing the impact of changes to data and data systems'
  },
  {
    id: 'fair-data-management',
    name: 'FAIR Data Management',
    level: 3,
    category: 'core',
    domain: 'Data',
    parentId: 'data-management',
    description: 'Managing data to be Findable, Accessible, Interoperable, and Reusable'
  },
  {
    id: 'metadata-management',
    name: 'Metadata Management',
    level: 3,
    category: 'core',
    domain: 'Data',
    parentId: 'data-management',
    description: 'Managing metadata to describe, explain, and locate data'
  },
  {
    id: 'semantics-ontology-management',
    name: 'Semantics / Ontology Management',
    level: 3,
    category: 'core',
    domain: 'Data',
    parentId: 'data-management',
    description: 'Managing semantic models and ontologies for data understanding'
  }
];

// Level 3 capabilities for Data Storage
const level3DataStorageCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'relational-databases',
    name: 'Relational Databases',
    level: 3,
    category: 'core',
    domain: 'Data',
    parentId: 'data-storage',
    description: 'Storing and managing data in relational database systems'
  }
];

// Level 3 capabilities for Master Data Management
const level3MasterDataManagementCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'customer-master-data',
    name: 'Customer Master Data',
    level: 3,
    category: 'core',
    domain: 'Data',
    parentId: 'master-data-management',
    description: 'Managing master data related to customers'
  },
  {
    id: 'employee-master-data',
    name: 'Employee Master Data',
    level: 3,
    category: 'core',
    domain: 'Data',
    parentId: 'master-data-management',
    description: 'Managing master data related to employees'
  },
  {
    id: 'engineering-master-data',
    name: 'Engineering Master Data Management',
    level: 3,
    category: 'core',
    domain: 'Data',
    parentId: 'master-data-management',
    description: 'Managing master data related to engineering'
  },
  {
    id: 'organizational-masterdata',
    name: 'Organizational Masterdata',
    level: 3,
    category: 'core',
    domain: 'Data',
    parentId: 'master-data-management',
    description: 'Managing master data related to organizational structure'
  },
  {
    id: 'product-production-master-data',
    name: 'Product/Production Master Data',
    level: 3,
    category: 'core',
    domain: 'Data',
    parentId: 'master-data-management',
    description: 'Managing master data related to products and production'
  },
  {
    id: 'reference-data-management',
    name: 'Reference Data Management',
    level: 3,
    category: 'core',
    domain: 'Data',
    parentId: 'master-data-management',
    description: 'Managing reference data used across the organization'
  },
  {
    id: 'vendor-supplier-master-data',
    name: 'Vendor/Supplier Master Data',
    level: 3,
    category: 'core',
    domain: 'Data',
    parentId: 'master-data-management',
    description: 'Managing master data related to vendors and suppliers'
  }
];

// Level 2 capabilities for Data & Analytics
const level2DataAnalyticsCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'advanced-analytics',
    name: 'Advanced Analytics',
    level: 2,
    category: 'core',
    domain: 'Data',
    parentId: 'data-analytics',
    description: 'Using advanced techniques to analyze data and derive insights',
    children: level3AdvancedAnalyticsCapabilities
  },
  {
    id: 'ai-ml',
    name: 'Artificial Intelligence & Machine Learning',
    level: 2,
    category: 'core',
    domain: 'Data',
    parentId: 'data-analytics',
    description: 'Developing and applying AI and ML technologies',
    children: level3AIMLCapabilities
  },
  {
    id: 'business-intelligence',
    name: 'Business Intelligence & Insights',
    level: 2,
    category: 'core',
    domain: 'Data',
    parentId: 'data-analytics',
    description: 'Transforming data into actionable business insights',
    children: level3BusinessIntelligenceCapabilities
  },
  {
    id: 'data-engineering',
    name: 'Data Engineering',
    level: 2,
    category: 'core',
    domain: 'Data',
    parentId: 'data-analytics',
    description: 'Designing and building systems for collecting, storing, and analyzing data',
    children: level3DataEngineeringCapabilities
  },
  {
    id: 'data-ingestion',
    name: 'Data ingestion',
    level: 2,
    category: 'core',
    domain: 'Data',
    parentId: 'data-analytics',
    description: 'Importing data from various sources into storage for analysis',
    children: level3DataIngestionCapabilities
  },
  {
    id: 'data-management',
    name: 'Data Management',
    level: 2,
    category: 'core',
    domain: 'Data',
    parentId: 'data-analytics',
    description: 'Managing data as a valuable resource throughout its lifecycle',
    children: level3DataManagementCapabilities
  },
  {
    id: 'data-storage',
    name: 'Data Storage',
    level: 2,
    category: 'core',
    domain: 'Data',
    parentId: 'data-analytics',
    description: 'Storing and managing data in various storage systems',
    children: level3DataStorageCapabilities
  },
  {
    id: 'master-data-management',
    name: 'Master Data Management',
    level: 2,
    category: 'core',
    domain: 'Data',
    parentId: 'data-analytics',
    description: 'Managing master data to ensure consistency across the organization',
    children: level3MasterDataManagementCapabilities
  }
];

// Level 3 capabilities for Content Management
const level3ContentManagementCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'communication-distribution-strategy',
    name: 'Communication & Distribution Strategy Design',
    level: 3,
    category: 'core',
    domain: 'Communications',
    parentId: 'content-management',
    description: 'Designing strategies for communication and content distribution'
  },
  {
    id: 'communication-analysis',
    name: 'Communication Analysis',
    level: 3,
    category: 'core',
    domain: 'Communications',
    parentId: 'content-management',
    description: 'Analyzing communication effectiveness and reach'
  },
  {
    id: 'communication-planning',
    name: 'Communication Planning & Preparation',
    level: 3,
    category: 'core',
    domain: 'Communications',
    parentId: 'content-management',
    description: 'Planning and preparing communication strategies and content'
  },
  {
    id: 'consent-management',
    name: 'Consent Management',
    level: 3,
    category: 'core',
    domain: 'Communications',
    parentId: 'content-management',
    description: 'Managing user consent for communications and data usage'
  },
  {
    id: 'corporate-brand-info',
    name: 'Corporate Brand Information Management',
    level: 3,
    category: 'core',
    domain: 'Communications',
    parentId: 'content-management',
    description: 'Managing corporate brand information and guidelines'
  },
  {
    id: 'digital-asset-management',
    name: 'Digital Asset Management',
    level: 3,
    category: 'core',
    domain: 'Communications',
    parentId: 'content-management',
    description: 'Managing digital assets such as images, videos, and documents'
  },
  {
    id: 'feedback-collection',
    name: 'Feedback Collection',
    level: 3,
    category: 'core',
    domain: 'Communications',
    parentId: 'content-management',
    description: 'Collecting and analyzing feedback from stakeholders'
  },
  {
    id: 'search-optimization',
    name: 'Management & Optimization of Search',
    level: 3,
    category: 'core',
    domain: 'Communications',
    parentId: 'content-management',
    description: 'Optimizing content for search engines and internal search systems'
  },
  {
    id: 'market-content-hubs',
    name: 'Market Content (Content Hubs)',
    level: 3,
    category: 'core',
    domain: 'Communications',
    parentId: 'content-management',
    description: 'Managing content hubs for market-specific information'
  },
  {
    id: 'product-info-management',
    name: 'Product Information Management',
    level: 3,
    category: 'core',
    domain: 'Communications',
    parentId: 'content-management',
    description: 'Managing product information for communication purposes'
  },
  {
    id: 'internal-search',
    name: 'Search (Internal)',
    level: 3,
    category: 'core',
    domain: 'Communications',
    parentId: 'content-management',
    description: 'Managing internal search capabilities and systems'
  },
  {
    id: 'structured-content',
    name: 'Structured Content Management',
    level: 3,
    category: 'core',
    domain: 'Communications',
    parentId: 'content-management',
    description: 'Managing structured content for consistent communication'
  }
];

// Level 3 capabilities for Internal Communication
const level3InternalCommunicationCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'communication-between-units',
    name: 'Communication between Operating Units',
    level: 3,
    category: 'core',
    domain: 'Communications',
    parentId: 'internal-communication',
    description: 'Managing communication between different operating units'
  },
  {
    id: 'internal-relations-management-1',
    name: 'Internal Relations Management',
    level: 3,
    category: 'core',
    domain: 'Communications',
    parentId: 'internal-communication',
    description: 'Managing relationships with internal stakeholders'
  },
  {
    id: 'internal-relations-management-2',
    name: 'Internal Relations Management ',
    level: 3,
    category: 'core',
    domain: 'Communications',
    parentId: 'internal-communication',
    description: 'Additional aspects of managing relationships with internal stakeholders'
  }
];

// Level 3 capabilities for Stakeholder Engagement
const level3StakeholderEngagementCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'activation-strategy',
    name: 'Activation Strategy Planning',
    level: 3,
    category: 'core',
    domain: 'Communications',
    parentId: 'stakeholder-engagement',
    description: 'Planning strategies for stakeholder activation'
  },
  {
    id: 'campaign-management',
    name: 'Campaign Management',
    level: 3,
    category: 'core',
    domain: 'Communications',
    parentId: 'stakeholder-engagement',
    description: 'Managing marketing and communication campaigns'
  },
  {
    id: 'congress-event-management-1',
    name: 'Congress & Event Management',
    level: 3,
    category: 'core',
    domain: 'Communications',
    parentId: 'stakeholder-engagement',
    description: 'Managing congresses and events for stakeholder engagement'
  },
  {
    id: 'congress-event-management-2',
    name: 'Congress & Event Management ',
    level: 3,
    category: 'core',
    domain: 'Communications',
    parentId: 'stakeholder-engagement',
    description: 'Additional aspects of managing congresses and events'
  },
  {
    id: 'education-offer',
    name: 'Education Offer',
    level: 3,
    category: 'core',
    domain: 'Communications',
    parentId: 'stakeholder-engagement',
    description: 'Providing educational offerings to stakeholders'
  },
  {
    id: 'external-relations-management-1',
    name: 'External Relations Management',
    level: 3,
    category: 'core',
    domain: 'Communications',
    parentId: 'stakeholder-engagement',
    description: 'Managing relationships with external stakeholders'
  },
  {
    id: 'external-relations-management-2',
    name: 'External Relations Management ',
    level: 3,
    category: 'core',
    domain: 'Communications',
    parentId: 'stakeholder-engagement',
    description: 'Additional aspects of managing relationships with external stakeholders'
  },
  {
    id: 'influencers-map',
    name: 'Influencers Map',
    level: 3,
    category: 'core',
    domain: 'Communications',
    parentId: 'stakeholder-engagement',
    description: 'Mapping and managing relationships with influencers'
  },
  {
    id: 'issues-responses',
    name: 'Issues & Responses Management',
    level: 3,
    category: 'core',
    domain: 'Communications',
    parentId: 'stakeholder-engagement',
    description: 'Managing communication issues and responses'
  },
  {
    id: 'bayer-kultur',
    name: 'Management of "Bayer Kultur"',
    level: 3,
    category: 'core',
    domain: 'Communications',
    parentId: 'stakeholder-engagement',
    description: 'Managing cultural initiatives and programs'
  },
  {
    id: 'sports-management',
    name: 'Management of Sports',
    level: 3,
    category: 'core',
    domain: 'Communications',
    parentId: 'stakeholder-engagement',
    description: 'Managing sports-related initiatives and sponsorships'
  },
  {
    id: 'stakeholders-segmentation',
    name: 'Stakeholders Segmentation',
    level: 3,
    category: 'core',
    domain: 'Communications',
    parentId: 'stakeholder-engagement',
    description: 'Segmenting stakeholders for targeted communication'
  }
];

// Level 2 capabilities for Communications
const level2CommunicationsCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'channel-management',
    name: 'Channel Management',
    level: 2,
    category: 'core',
    domain: 'Communications',
    parentId: 'communications',
    description: 'Managing communication channels for effective message delivery',
    children: []
  },
  {
    id: 'consulting',
    name: 'Consulting',
    level: 2,
    category: 'core',
    domain: 'Communications',
    parentId: 'communications',
    description: 'Providing communication consulting services internally',
    children: []
  },
  {
    id: 'content-management',
    name: 'Content Management',
    level: 2,
    category: 'core',
    domain: 'Communications',
    parentId: 'communications',
    description: 'Managing content creation, distribution, and optimization',
    children: level3ContentManagementCapabilities
  },
  {
    id: 'internal-communication',
    name: 'Internal Communication',
    level: 2,
    category: 'core',
    domain: 'Communications',
    parentId: 'communications',
    description: 'Managing communication within the organization',
    children: level3InternalCommunicationCapabilities
  },
  {
    id: 'stakeholder-engagement',
    name: 'Stakeholder Engagement (Marketing & Campaigns)',
    level: 2,
    category: 'core',
    domain: 'Communications',
    parentId: 'communications',
    description: 'Engaging with stakeholders through marketing and campaigns',
    children: level3StakeholderEngagementCapabilities
  },
  {
    id: 'website-social-media',
    name: 'Website & Social Media Management',
    level: 2,
    category: 'core',
    domain: 'Communications',
    parentId: 'communications',
    description: 'Managing website content and social media presence',
    children: []
  }
];

// Level 2 capabilities for After Sales Management
const level2AfterSalesCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'maintenance-management',
    name: 'Maintenance Management',
    level: 2,
    category: 'core',
    domain: 'After Sales',
    parentId: 'after-sales-management',
    description: 'Managing maintenance services and operations for products after sale',
    children: []
  }
];

// Level 3 capabilities for Continual Service Improvement
const level3ContinualServiceImprovementCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'service-performance-management',
    name: 'Service Performance Management',
    level: 3,
    category: 'core',
    domain: 'Management',
    parentId: 'continual-service-improvement',
    description: 'Managing and improving service performance metrics and outcomes'
  },
  {
    id: 'user-satisfaction',
    name: 'User Satisfaction',
    level: 3,
    category: 'core',
    domain: 'Management',
    parentId: 'continual-service-improvement',
    description: 'Measuring and improving user satisfaction with services'
  }
];

// Level 3 capabilities for Enterprise Architecture
const level3EnterpriseArchitectureCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'architectural-planning-roadmapping',
    name: 'Architectural Planning & Roadmapping',
    level: 3,
    category: 'core',
    domain: 'Management',
    parentId: 'enterprise-architecture',
    description: 'Planning and creating roadmaps for enterprise architecture evolution'
  },
  {
    id: 'ea-governance',
    name: 'EA Governance',
    level: 3,
    category: 'core',
    domain: 'Management',
    parentId: 'enterprise-architecture',
    description: 'Governing enterprise architecture standards, principles, and compliance'
  },
  {
    id: 'it-portfolio-management-optimization',
    name: 'IT Portfolio Management & Optimization',
    level: 3,
    category: 'core',
    domain: 'Management',
    parentId: 'enterprise-architecture',
    description: 'Managing and optimizing the IT portfolio to align with business goals'
  },
  {
    id: 'repositories-lifecycle-management',
    name: 'Repositories & Life Cycle Management',
    level: 3,
    category: 'core',
    domain: 'Management',
    parentId: 'enterprise-architecture',
    description: 'Managing architecture repositories and lifecycle of architecture artifacts'
  }
];

// Level 3 capabilities for Governance
const level3GovernanceCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'continuous-improvement',
    name: 'Continous Improvement',
    level: 3,
    category: 'core',
    domain: 'Management',
    parentId: 'governance',
    description: 'Continuously improving governance processes and frameworks'
  },
  {
    id: 'management-governance-framework',
    name: 'Management of Governance Framework',
    level: 3,
    category: 'core',
    domain: 'Management',
    parentId: 'governance',
    description: 'Managing the overall governance framework and its components'
  },
  {
    id: 'regulation-management',
    name: 'Regulation Management',
    level: 3,
    category: 'core',
    domain: 'Management',
    parentId: 'governance',
    description: 'Managing compliance with regulations and regulatory requirements'
  }
];

// Level 3 capabilities for Planning
const level3PlanningCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'demand-management',
    name: 'Demand Management',
    level: 3,
    category: 'core',
    domain: 'Management',
    parentId: 'planning',
    description: 'Managing and prioritizing business demands for services and resources'
  },
  {
    id: 'portfolio-management',
    name: 'Portfolio Management',
    level: 3,
    category: 'core',
    domain: 'Management',
    parentId: 'planning',
    description: 'Managing portfolios of projects, programs, and investments'
  },
  {
    id: 'program-project-management',
    name: 'Program/Project Management',
    level: 3,
    category: 'core',
    domain: 'Management',
    parentId: 'planning',
    description: 'Managing programs and projects to achieve business objectives'
  }
];

// Level 3 capabilities for Service & Solution Management
const level3ServiceSolutionManagementCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'license-management',
    name: 'License Management',
    level: 3,
    category: 'core',
    domain: 'Management',
    parentId: 'service-solution-management',
    description: 'Managing software and service licenses and compliance'
  },
  {
    id: 'requirements-engineering',
    name: 'Requirements Engineering',
    level: 3,
    category: 'core',
    domain: 'Management',
    parentId: 'service-solution-management',
    description: 'Gathering, analyzing, and documenting requirements for services and solutions'
  },
  {
    id: 'service-solution-lifecycle-management-1',
    name: 'Service & Solution Lifecycle Management',
    level: 3,
    category: 'core',
    domain: 'Management',
    parentId: 'service-solution-management',
    description: 'Managing the lifecycle of services and solutions from conception to retirement'
  },
  {
    id: 'service-solution-lifecycle-management-2',
    name: 'Service & Solution Lifecycle Management ',
    level: 3,
    category: 'core',
    domain: 'Management',
    parentId: 'service-solution-management',
    description: 'Additional aspects of managing service and solution lifecycles'
  },
  {
    id: 'smart-automation-process-digitization',
    name: 'Smart Automation & Process Digitization',
    level: 3,
    category: 'core',
    domain: 'Management',
    parentId: 'service-solution-management',
    description: 'Automating and digitizing processes to improve efficiency and effectiveness'
  }
];

// Level 3 capabilities for Service Design & Strategy
const level3ServiceDesignStrategyCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'availability-management',
    name: 'Availability Management',
    level: 3,
    category: 'core',
    domain: 'Management',
    parentId: 'service-design-strategy',
    description: 'Ensuring services are available as required by the business'
  },
  {
    id: 'capacity-management',
    name: 'Capacity Management',
    level: 3,
    category: 'core',
    domain: 'Management',
    parentId: 'service-design-strategy',
    description: 'Managing service capacity to meet current and future business needs'
  },
  {
    id: 'service-catalog-management',
    name: 'Service Catalog Management',
    level: 3,
    category: 'core',
    domain: 'Management',
    parentId: 'service-design-strategy',
    description: 'Managing the service catalog and service offerings'
  },
  {
    id: 'service-continuity-management',
    name: 'Service Continuity Management',
    level: 3,
    category: 'core',
    domain: 'Management',
    parentId: 'service-design-strategy',
    description: 'Ensuring service continuity during and after disruptions'
  },
  {
    id: 'service-level-management',
    name: 'Service Level Management',
    level: 3,
    category: 'core',
    domain: 'Management',
    parentId: 'service-design-strategy',
    description: 'Managing service level agreements and service performance'
  },
  {
    id: 'service-lifecycle-management-1',
    name: 'Service Lifecycle Management',
    level: 3,
    category: 'core',
    domain: 'Management',
    parentId: 'service-design-strategy',
    description: 'Managing the lifecycle of services from conception to retirement'
  },
  {
    id: 'service-lifecycle-management-2',
    name: 'Service Lifecycle Management ',
    level: 3,
    category: 'core',
    domain: 'Management',
    parentId: 'service-design-strategy',
    description: 'Additional aspects of managing service lifecycles'
  },
  {
    id: 'service-portfolio-management',
    name: 'Service Portfolio Management',
    level: 3,
    category: 'core',
    domain: 'Management',
    parentId: 'service-design-strategy',
    description: 'Managing the portfolio of services to maximize value'
  }
];

// Level 3 capabilities for Service Operation Management
const level3ServiceOperationManagementCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'crisis-management',
    name: 'Crisis Management',
    level: 3,
    category: 'core',
    domain: 'Management',
    parentId: 'service-operation-management',
    description: 'Managing crises and major incidents that affect service operations'
  },
  {
    id: 'help-desk',
    name: 'Help Desk',
    level: 3,
    category: 'core',
    domain: 'Management',
    parentId: 'service-operation-management',
    description: 'Providing first-line support for service users'
  },
  {
    id: 'problem-management',
    name: 'Problem Management',
    level: 3,
    category: 'core',
    domain: 'Management',
    parentId: 'service-operation-management',
    description: 'Identifying and resolving the root causes of incidents'
  },
  {
    id: 'request-fulfillment',
    name: 'Request Fulfillment',
    level: 3,
    category: 'core',
    domain: 'Management',
    parentId: 'service-operation-management',
    description: 'Fulfilling service requests from users'
  },
  {
    id: 'service-event-management',
    name: 'Service Event Management',
    level: 3,
    category: 'core',
    domain: 'Management',
    parentId: 'service-operation-management',
    description: 'Managing service events and notifications'
  },
  {
    id: 'service-incident-management',
    name: 'Service Incident Management',
    level: 3,
    category: 'core',
    domain: 'Management',
    parentId: 'service-operation-management',
    description: 'Managing and resolving service incidents'
  }
];

// Level 3 capabilities for Service Transition
const level3ServiceTransitionCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'configuration-asset-management',
    name: 'Configuration & Asset Management',
    level: 3,
    category: 'core',
    domain: 'Management',
    parentId: 'service-transition',
    description: 'Managing configuration items and assets used in service delivery'
  },
  {
    id: 'release-deployment-management',
    name: 'Release & Deployment Management',
    level: 3,
    category: 'core',
    domain: 'Management',
    parentId: 'service-transition',
    description: 'Managing the release and deployment of services and solutions'
  },
  {
    id: 'service-change-management',
    name: 'Service Change Management',
    level: 3,
    category: 'core',
    domain: 'Management',
    parentId: 'service-transition',
    description: 'Managing changes to services and service components'
  },
  {
    id: 'transition-planning',
    name: 'Transition Planning',
    level: 3,
    category: 'core',
    domain: 'Management',
    parentId: 'service-transition',
    description: 'Planning the transition of services from development to operations'
  }
];

// Level 3 capabilities for Strategy Development & Management
const level3StrategyDevelopmentManagementCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'foresight-trend-watching',
    name: 'Foresight/Trend watching',
    level: 3,
    category: 'core',
    domain: 'Management',
    parentId: 'strategy-development-management',
    description: 'Monitoring trends and developing foresight for strategic planning'
  },
  {
    id: 'strategic-concepts',
    name: 'Strategic Concepts',
    level: 3,
    category: 'core',
    domain: 'Management',
    parentId: 'strategy-development-management',
    description: 'Developing strategic concepts and frameworks'
  },
  {
    id: 'strategic-initiative-management',
    name: 'Strategic Initiative Management',
    level: 3,
    category: 'core',
    domain: 'Management',
    parentId: 'strategy-development-management',
    description: 'Managing strategic initiatives and programs'
  },
  {
    id: 'strategy-definition',
    name: 'Strategy Definition',
    level: 3,
    category: 'core',
    domain: 'Management',
    parentId: 'strategy-development-management',
    description: 'Defining organizational strategy and strategic objectives'
  },
  {
    id: 'strategy-implementation-1',
    name: 'Strategy Implementation',
    level: 3,
    category: 'core',
    domain: 'Management',
    parentId: 'strategy-development-management',
    description: 'Implementing strategic plans and initiatives'
  },
  {
    id: 'strategy-implementation-2',
    name: 'Strategy Implementation ',
    level: 3,
    category: 'core',
    domain: 'Management',
    parentId: 'strategy-development-management',
    description: 'Additional aspects of implementing strategic plans and initiatives'
  }
];

// Level 2 capabilities for Enterprise Management
const level2EnterpriseManagementCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'continual-service-improvement',
    name: 'Continual Service Improvement',
    level: 2,
    category: 'core',
    domain: 'Management',
    parentId: 'enterprise-management',
    description: 'Continuously improving service quality and efficiency',
    children: level3ContinualServiceImprovementCapabilities
  },
  {
    id: 'enterprise-architecture',
    name: 'Enterprise Architecture',
    level: 2,
    category: 'core',
    domain: 'Management',
    parentId: 'enterprise-management',
    description: 'Designing and managing enterprise architecture',
    children: level3EnterpriseArchitectureCapabilities
  },
  {
    id: 'governance',
    name: 'Governance',
    level: 2,
    category: 'core',
    domain: 'Management',
    parentId: 'enterprise-management',
    description: 'Establishing and maintaining governance frameworks and processes',
    children: level3GovernanceCapabilities
  },
  {
    id: 'planning',
    name: 'Planning',
    level: 2,
    category: 'core',
    domain: 'Management',
    parentId: 'enterprise-management',
    description: 'Planning for enterprise initiatives and resource allocation',
    children: level3PlanningCapabilities
  },
  {
    id: 'service-solution-management',
    name: 'Service & Solution Management',
    level: 2,
    category: 'core',
    domain: 'Management',
    parentId: 'enterprise-management',
    description: 'Managing services and solutions throughout their lifecycle',
    children: level3ServiceSolutionManagementCapabilities
  },
  {
    id: 'service-design-strategy',
    name: 'Service Design & Strategy',
    level: 2,
    category: 'core',
    domain: 'Management',
    parentId: 'enterprise-management',
    description: 'Designing services and developing service strategies',
    children: level3ServiceDesignStrategyCapabilities
  },
  {
    id: 'service-operation-management',
    name: 'Service Operation Management',
    level: 2,
    category: 'core',
    domain: 'Management',
    parentId: 'enterprise-management',
    description: 'Managing day-to-day service operations',
    children: level3ServiceOperationManagementCapabilities
  },
  {
    id: 'service-transition',
    name: 'Service Transition',
    level: 2,
    category: 'core',
    domain: 'Management',
    parentId: 'enterprise-management',
    description: 'Transitioning services from development to operations',
    children: level3ServiceTransitionCapabilities
  },
  {
    id: 'strategy-development-management',
    name: 'Strategy Development & Management',
    level: 2,
    category: 'core',
    domain: 'Management',
    parentId: 'enterprise-management',
    description: 'Developing and managing enterprise strategy',
    children: level3StrategyDevelopmentManagementCapabilities
  }
];

// Level 3 capabilities for Environmental Management
const level3EnvironmentalManagementCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'environment-sensing',
    name: 'Environment Sensing',
    level: 3,
    category: 'core',
    domain: 'HSE',
    parentId: 'environmental-management',
    description: 'Monitoring and sensing environmental conditions and changes'
  },
  {
    id: 'environmental-monitoring',
    name: 'Environmental Monitoring',
    level: 3,
    category: 'core',
    domain: 'HSE',
    parentId: 'environmental-management',
    description: 'Monitoring environmental impacts and compliance with regulations'
  },
  {
    id: 'hazard-waste-disposal',
    name: 'Hazard Waste Disposal Management',
    level: 3,
    category: 'core',
    domain: 'HSE',
    parentId: 'environmental-management',
    description: 'Managing the disposal of hazardous waste in compliance with regulations'
  }
];

// Level 3 capabilities for Occupational Health & Safety
const level3OccupationalHealthSafetyCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'industrial-hygiene',
    name: 'Industrial Hygiene Management',
    level: 3,
    category: 'core',
    domain: 'HSE',
    parentId: 'occupational-health-safety',
    description: 'Managing industrial hygiene to protect worker health'
  },
  {
    id: 'vehicle-incident',
    name: 'Vehicle Incident Management',
    level: 3,
    category: 'core',
    domain: 'HSE',
    parentId: 'occupational-health-safety',
    description: 'Managing and preventing vehicle-related incidents'
  },
  {
    id: 'workplace-sanity',
    name: 'Workplace Sanity Management',
    level: 3,
    category: 'core',
    domain: 'HSE',
    parentId: 'occupational-health-safety',
    description: 'Managing workplace sanitation and cleanliness'
  }
];

// Level 3 capabilities for Process & Plant Safety
const level3ProcessPlantSafetyCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'emergencies-planning',
    name: 'Emergencies Planning',
    level: 3,
    category: 'core',
    domain: 'HSE',
    parentId: 'process-plant-safety',
    description: 'Planning for emergencies and developing emergency procedures'
  },
  {
    id: 'emergency-response',
    name: 'Emergency Response',
    level: 3,
    category: 'core',
    domain: 'HSE',
    parentId: 'process-plant-safety',
    description: 'Responding to emergencies effectively and safely'
  },
  {
    id: 'hazard-identification',
    name: 'Identification & Evaluation of Hazard',
    level: 3,
    category: 'core',
    domain: 'HSE',
    parentId: 'process-plant-safety',
    description: 'Identifying and evaluating hazards in processes and plants'
  },
  {
    id: 'incident-management',
    name: 'Incident Management',
    level: 3,
    category: 'core',
    domain: 'HSE',
    parentId: 'process-plant-safety',
    description: 'Managing incidents to minimize impact and prevent recurrence'
  },
  {
    id: 'management-of-change',
    name: 'Management of Change (MoC)',
    level: 3,
    category: 'core',
    domain: 'HSE',
    parentId: 'process-plant-safety',
    description: 'Managing changes to processes, equipment, and procedures safely'
  },
  {
    id: 'operational-controls',
    name: 'Operational Controls Management',
    level: 3,
    category: 'core',
    domain: 'HSE',
    parentId: 'process-plant-safety',
    description: 'Managing operational controls to ensure safety'
  },
  {
    id: 'site-incident',
    name: 'Site Incident Management',
    level: 3,
    category: 'core',
    domain: 'HSE',
    parentId: 'process-plant-safety',
    description: 'Managing incidents at specific sites'
  }
];

// Level 2 capabilities for Health, Safety & Environmental Protection
const level2HSECapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'chemical-legislation',
    name: 'Chemical Legislation Compliance',
    level: 2,
    category: 'core',
    domain: 'HSE',
    parentId: 'hse',
    description: 'Ensuring compliance with chemical legislation and regulations',
    children: []
  },
  {
    id: 'environmental-management',
    name: 'Environmental Management ',
    level: 2,
    category: 'core',
    domain: 'HSE',
    parentId: 'hse',
    description: 'Managing environmental impacts and compliance',
    children: level3EnvironmentalManagementCapabilities
  },
  {
    id: 'occupational-health-safety',
    name: 'Occupational Health & Safety ',
    level: 2,
    category: 'core',
    domain: 'HSE',
    parentId: 'hse',
    description: 'Managing occupational health and safety',
    children: level3OccupationalHealthSafetyCapabilities
  },
  {
    id: 'process-plant-safety',
    name: 'Process & Plant Safety (PPS) ',
    level: 2,
    category: 'core',
    domain: 'HSE',
    parentId: 'hse',
    description: 'Managing process and plant safety',
    children: level3ProcessPlantSafetyCapabilities
  },
  {
    id: 'product-footprint',
    name: 'Product Footprint',
    level: 2,
    category: 'core',
    domain: 'HSE',
    parentId: 'hse',
    description: 'Managing and reducing the environmental footprint of products',
    children: []
  },
  {
    id: 'sustainable-business-models',
    name: 'Sustainable Business Models',
    level: 2,
    category: 'core',
    domain: 'HSE',
    parentId: 'hse',
    description: 'Developing and implementing sustainable business models',
    children: []
  }
];

// Level 3 capabilities for HR & Organization - Attraction & Recruiting
const level3AttractionRecruitingCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'recruiting-sourcing-selection-1',
    name: 'Recruiting, Sourcing & Selection',
    level: 3,
    category: 'core',
    domain: 'HR',
    parentId: 'attraction-recruiting',
    description: 'Recruiting, sourcing, and selecting candidates for positions'
  },
  {
    id: 'recruiting-sourcing-selection-2',
    name: 'Recruiting, Sourcing & Selection ',
    level: 3,
    category: 'core',
    domain: 'HR',
    parentId: 'attraction-recruiting',
    description: 'Additional aspects of recruiting, sourcing, and selecting candidates'
  }
];

// Level 3 capabilities for HR & Organization - Employee Relations
const level3EmployeeRelationsCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'employee-communication-1',
    name: 'Employee Communication',
    level: 3,
    category: 'core',
    domain: 'HR',
    parentId: 'employee-relations',
    description: 'Communicating with employees effectively'
  },
  {
    id: 'employee-communication-2',
    name: 'Employee Communication ',
    level: 3,
    category: 'core',
    domain: 'HR',
    parentId: 'employee-relations',
    description: 'Additional aspects of communicating with employees'
  },
  {
    id: 'employee-support-services-1',
    name: 'Employee Support Services',
    level: 3,
    category: 'core',
    domain: 'HR',
    parentId: 'employee-relations',
    description: 'Providing support services to employees'
  },
  {
    id: 'employee-support-services-2',
    name: 'Employee Support Services ',
    level: 3,
    category: 'core',
    domain: 'HR',
    parentId: 'employee-relations',
    description: 'Additional aspects of providing support services to employees'
  }
];

// Level 3 capabilities for HR & Organization - Employer Proposition
const level3EmployerPropositionCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'retention-1',
    name: 'Retention',
    level: 3,
    category: 'core',
    domain: 'HR',
    parentId: 'employer-proposition',
    description: 'Retaining valuable employees'
  },
  {
    id: 'retention-2',
    name: 'Retention ',
    level: 3,
    category: 'core',
    domain: 'HR',
    parentId: 'employer-proposition',
    description: 'Additional aspects of retaining valuable employees'
  },
  {
    id: 'retirement-1',
    name: 'Retirement',
    level: 3,
    category: 'core',
    domain: 'HR',
    parentId: 'employer-proposition',
    description: 'Managing employee retirement processes'
  },
  {
    id: 'retirement-2',
    name: 'Retirement ',
    level: 3,
    category: 'core',
    domain: 'HR',
    parentId: 'employer-proposition',
    description: 'Additional aspects of managing employee retirement processes'
  },
  {
    id: 'reward-1',
    name: 'Reward',
    level: 3,
    category: 'core',
    domain: 'HR',
    parentId: 'employer-proposition',
    description: 'Rewarding employees for performance and contributions'
  },
  {
    id: 'reward-2',
    name: 'Reward ',
    level: 3,
    category: 'core',
    domain: 'HR',
    parentId: 'employer-proposition',
    description: 'Additional aspects of rewarding employees'
  }
];

// Level 3 capabilities for HR & Organization - Learning
const level3LearningCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'knowledge-management',
    name: 'Knowledge Management',
    level: 3,
    category: 'core',
    domain: 'HR',
    parentId: 'learning',
    description: 'Managing organizational knowledge and facilitating knowledge sharing'
  }
];

// Level 3 capabilities for HR & Organization - Talent Development & Performance
const level3TalentDevelopmentPerformanceCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'employee-orientation-deployment',
    name: 'Employee Orientation & Deployment',
    level: 3,
    category: 'core',
    domain: 'HR',
    parentId: 'talent-development-performance',
    description: 'Orienting new employees and deploying them effectively'
  },
  {
    id: 'employee-performance-development',
    name: 'Employee Performance & Development',
    level: 3,
    category: 'core',
    domain: 'HR',
    parentId: 'talent-development-performance',
    description: 'Managing employee performance and development'
  }
];

// Level 2 capabilities for HR & Organization
const level2HROrganizationCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'attraction-recruiting',
    name: 'Attraction & Recruiting',
    level: 2,
    category: 'core',
    domain: 'HR',
    parentId: 'hr-organization',
    description: 'Attracting and recruiting talent',
    children: level3AttractionRecruitingCapabilities
  },
  {
    id: 'contingent-workforce-management',
    name: 'Contingent Workforce Management',
    level: 2,
    category: 'core',
    domain: 'HR',
    parentId: 'hr-organization',
    description: 'Managing contingent workforce',
    children: []
  },
  {
    id: 'employee-relations',
    name: 'Employee Relations',
    level: 2,
    category: 'core',
    domain: 'HR',
    parentId: 'hr-organization',
    description: 'Managing relationships with employees',
    children: level3EmployeeRelationsCapabilities
  },
  {
    id: 'employer-proposition',
    name: 'Employer Proposition',
    level: 2,
    category: 'core',
    domain: 'HR',
    parentId: 'hr-organization',
    description: 'Developing and maintaining employer value proposition',
    children: level3EmployerPropositionCapabilities
  },
  {
    id: 'learning',
    name: 'Learning',
    level: 2,
    category: 'core',
    domain: 'HR',
    parentId: 'hr-organization',
    description: 'Providing learning opportunities for employees',
    children: level3LearningCapabilities
  },
  {
    id: 'talent-development-performance',
    name: 'Talent Development & Performance',
    level: 2,
    category: 'core',
    domain: 'HR',
    parentId: 'hr-organization',
    description: 'Developing talent and managing performance',
    children: level3TalentDevelopmentPerformanceCapabilities
  }
];

// Level 3 capabilities for BPM & Intelligent Automation
const level3BPMIntelligentAutomationCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'business-process-management',
    name: 'Business Process Management',
    level: 3,
    category: 'core',
    domain: 'IT',
    parentId: 'bpm-intelligent-automation',
    description: 'Managing and optimizing business processes'
  },
  {
    id: 'business-process-management-2',
    name: 'Business Process Management ',
    level: 3,
    category: 'core',
    domain: 'IT',
    parentId: 'bpm-intelligent-automation',
    description: 'Additional aspects of managing and optimizing business processes'
  },
  {
    id: 'intelligent-automation',
    name: 'Intelligent Automation',
    level: 3,
    category: 'core',
    domain: 'IT',
    parentId: 'bpm-intelligent-automation',
    description: 'Automating processes using intelligent technologies'
  }
];

// Level 3 capabilities for Integration
const level3IntegrationCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'application-integration',
    name: 'Application Integration',
    level: 3,
    category: 'core',
    domain: 'IT',
    parentId: 'integration',
    description: 'Integrating applications to work together seamlessly'
  },
  {
    id: 'general-integration',
    name: 'General Integration',
    level: 3,
    category: 'core',
    domain: 'IT',
    parentId: 'integration',
    description: 'General integration capabilities and services'
  }
];

// Level 3 capabilities for IoT & VR/AR Services
const level3IoTVRARCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'iot-devices',
    name: 'IOT Devices',
    level: 3,
    category: 'core',
    domain: 'IT',
    parentId: 'iot-vrar-services',
    description: 'Managing and utilizing IoT devices'
  },
  {
    id: 'iot-devices-2',
    name: 'IOT Devices ',
    level: 3,
    category: 'core',
    domain: 'IT',
    parentId: 'iot-vrar-services',
    description: 'Additional aspects of managing and utilizing IoT devices'
  },
  {
    id: 'iot-platforms',
    name: 'IoT Platforms',
    level: 3,
    category: 'core',
    domain: 'IT',
    parentId: 'iot-vrar-services',
    description: 'Managing and utilizing IoT platforms'
  },
  {
    id: 'iot-platforms-2',
    name: 'IoT Platforms ',
    level: 3,
    category: 'core',
    domain: 'IT',
    parentId: 'iot-vrar-services',
    description: 'Additional aspects of managing and utilizing IoT platforms'
  },
  {
    id: 'vrar-services',
    name: 'VR/AR Services',
    level: 3,
    category: 'core',
    domain: 'IT',
    parentId: 'iot-vrar-services',
    description: 'Providing virtual reality and augmented reality services'
  }
];

// Level 3 capabilities for IT Infrastructure Management
const level3ITInfrastructureManagementCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'hardware-infrastructure',
    name: 'Hardware Infrastructure',
    level: 3,
    category: 'core',
    domain: 'IT',
    parentId: 'it-infrastructure-management',
    description: 'Managing hardware infrastructure components'
  },
  {
    id: 'hardware-infrastructure-2',
    name: 'Hardware Infrastructure ',
    level: 3,
    category: 'core',
    domain: 'IT',
    parentId: 'it-infrastructure-management',
    description: 'Additional aspects of managing hardware infrastructure'
  },
  {
    id: 'network-infrastructure',
    name: 'Network Infrastructure',
    level: 3,
    category: 'core',
    domain: 'IT',
    parentId: 'it-infrastructure-management',
    description: 'Managing network infrastructure components'
  },
  {
    id: 'virtual-infrastructure',
    name: 'Virtual Infrastructure',
    level: 3,
    category: 'core',
    domain: 'IT',
    parentId: 'it-infrastructure-management',
    description: 'Managing virtual infrastructure components'
  },
  {
    id: 'workplace',
    name: 'Workplace',
    level: 3,
    category: 'core',
    domain: 'IT',
    parentId: 'it-infrastructure-management',
    description: 'Managing workplace IT infrastructure'
  },
  {
    id: 'workplace-2',
    name: 'Workplace ',
    level: 3,
    category: 'core',
    domain: 'IT',
    parentId: 'it-infrastructure-management',
    description: 'Additional aspects of managing workplace IT infrastructure'
  }
];

// Level 3 capabilities for IT Operations & Development
const level3ITOperationsDevelopmentCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'development',
    name: 'Development ',
    level: 3,
    category: 'core',
    domain: 'IT',
    parentId: 'it-operations-development',
    description: 'Developing software and applications'
  },
  {
    id: 'operations',
    name: 'Operations',
    level: 3,
    category: 'core',
    domain: 'IT',
    parentId: 'it-operations-development',
    description: 'Managing IT operations'
  },
  {
    id: 'operations-2',
    name: 'Operations ',
    level: 3,
    category: 'core',
    domain: 'IT',
    parentId: 'it-operations-development',
    description: 'Additional aspects of managing IT operations'
  }
];

// Level 3 capabilities for IT Security
const level3ITSecurityCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'data-security-privacy',
    name: 'Data Security & Privacy',
    level: 3,
    category: 'core',
    domain: 'IT',
    parentId: 'it-security',
    description: 'Securing data and ensuring privacy'
  },
  {
    id: 'identity-access-management',
    name: 'Identity & Access Management',
    level: 3,
    category: 'core',
    domain: 'IT',
    parentId: 'it-security',
    description: 'Managing identities and access to systems'
  },
  {
    id: 'threat-vulnerability-management',
    name: 'Threat & vulnerability Management',
    level: 3,
    category: 'core',
    domain: 'IT',
    parentId: 'it-security',
    description: 'Managing threats and vulnerabilities to IT systems'
  }
];

// Level 3 capabilities for Network & Compute
const level3NetworkComputeCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'compute',
    name: 'Compute',
    level: 3,
    category: 'core',
    domain: 'IT',
    parentId: 'network-compute',
    description: 'Managing compute resources'
  },
  {
    id: 'compute-2',
    name: 'Compute ',
    level: 3,
    category: 'core',
    domain: 'IT',
    parentId: 'network-compute',
    description: 'Additional aspects of managing compute resources'
  },
  {
    id: 'network',
    name: 'Network',
    level: 3,
    category: 'core',
    domain: 'IT',
    parentId: 'network-compute',
    description: 'Managing network resources'
  },
  {
    id: 'network-2',
    name: 'Network ',
    level: 3,
    category: 'core',
    domain: 'IT',
    parentId: 'network-compute',
    description: 'Additional aspects of managing network resources'
  }
];

// Level 2 capabilities for IT/Enabling Technology
const level2ITEnablingTechnologyCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'bpm-intelligent-automation',
    name: 'BPM & Intelligent Automation',
    level: 2,
    category: 'core',
    domain: 'IT',
    parentId: 'it-enabling-technology',
    description: 'Managing business processes and intelligent automation',
    children: level3BPMIntelligentAutomationCapabilities
  },
  {
    id: 'gxp-system-lifecycle-management',
    name: 'GxP System Life Cycle Management',
    level: 2,
    category: 'core',
    domain: 'IT',
    parentId: 'it-enabling-technology',
    description: 'Managing the lifecycle of GxP systems',
    children: []
  },
  {
    id: 'integration',
    name: 'Integration',
    level: 2,
    category: 'core',
    domain: 'IT',
    parentId: 'it-enabling-technology',
    description: 'Integrating systems and applications',
    children: level3IntegrationCapabilities
  },
  {
    id: 'iot-vrar-services',
    name: 'IoT & VR/AR Services',
    level: 2,
    category: 'core',
    domain: 'IT',
    parentId: 'it-enabling-technology',
    description: 'Providing IoT and VR/AR services',
    children: level3IoTVRARCapabilities
  },
  {
    id: 'it-infrastructure-management',
    name: 'IT Infrastructure Management',
    level: 2,
    category: 'core',
    domain: 'IT',
    parentId: 'it-enabling-technology',
    description: 'Managing IT infrastructure',
    children: level3ITInfrastructureManagementCapabilities
  },
  {
    id: 'it-operations-development',
    name: 'IT Operations & Development',
    level: 2,
    category: 'core',
    domain: 'IT',
    parentId: 'it-enabling-technology',
    description: 'Managing IT operations and development',
    children: level3ITOperationsDevelopmentCapabilities
  },
  {
    id: 'it-security',
    name: 'IT Security',
    level: 2,
    category: 'core',
    domain: 'IT',
    parentId: 'it-enabling-technology',
    description: 'Ensuring IT security',
    children: level3ITSecurityCapabilities
  },
  {
    id: 'network-compute',
    name: 'Network & Compute',
    level: 2,
    category: 'core',
    domain: 'IT',
    parentId: 'it-enabling-technology',
    description: 'Managing network and compute resources',
    children: level3NetworkComputeCapabilities
  }
];

// Level 3 capabilities for Compliance & Data Privacy
const level3ComplianceDataPrivacyCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'data-privacy',
    name: 'Data Privacy',
    level: 3,
    category: 'core',
    domain: 'Legal',
    parentId: 'compliance-data-privacy',
    description: 'Ensuring compliance with data privacy regulations and protecting personal data'
  },
  {
    id: 'financial-compliance-management',
    name: 'Financial Compliance Management',
    level: 3,
    category: 'core',
    domain: 'Legal',
    parentId: 'compliance-data-privacy',
    description: 'Managing compliance with financial regulations and standards'
  },
  {
    id: 'global-trade-compliance-management-1',
    name: 'Global Trade Compliance Management',
    level: 3,
    category: 'core',
    domain: 'Legal',
    parentId: 'compliance-data-privacy',
    description: 'Managing compliance with global trade regulations and requirements'
  },
  {
    id: 'global-trade-compliance-management-2',
    name: 'Global Trade Compliance Management ',
    level: 3,
    category: 'core',
    domain: 'Legal',
    parentId: 'compliance-data-privacy',
    description: 'Additional aspects of managing compliance with global trade regulations'
  },
  {
    id: 'regulatory-management-1',
    name: 'Regulatory Management',
    level: 3,
    category: 'core',
    domain: 'Legal',
    parentId: 'compliance-data-privacy',
    description: 'Managing compliance with regulatory requirements across industries'
  },
  {
    id: 'regulatory-management-2',
    name: 'Regulatory Management ',
    level: 3,
    category: 'core',
    domain: 'Legal',
    parentId: 'compliance-data-privacy',
    description: 'Additional aspects of managing regulatory compliance'
  },
  {
    id: 'services-compliance-management',
    name: 'Services Compliance Management',
    level: 3,
    category: 'core',
    domain: 'Legal',
    parentId: 'compliance-data-privacy',
    description: 'Managing compliance for services and service delivery'
  }
];

// Level 3 capabilities for Intellectual Property
const level3IntellectualPropertyCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'copyright-trademark-management',
    name: 'Copyright &Trademark Management',
    level: 3,
    category: 'core',
    domain: 'Legal',
    parentId: 'intellectual-property',
    description: 'Managing copyrights and trademarks to protect intellectual property'
  },
  {
    id: 'patent-management',
    name: 'Patent Management',
    level: 3,
    category: 'core',
    domain: 'Legal',
    parentId: 'intellectual-property',
    description: 'Managing patents and patent applications'
  }
];

// Level 3 capabilities for Legal Affairs
const level3LegalAffairsCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'business-conduct-management-1',
    name: 'Business Conduct Management',
    level: 3,
    category: 'core',
    domain: 'Legal',
    parentId: 'legal-affairs',
    description: 'Managing business conduct and ethics'
  },
  {
    id: 'business-conduct-management-2',
    name: 'Business Conduct Management ',
    level: 3,
    category: 'core',
    domain: 'Legal',
    parentId: 'legal-affairs',
    description: 'Additional aspects of managing business conduct and ethics'
  },
  {
    id: 'contract-management-1',
    name: 'Contract Management',
    level: 3,
    category: 'core',
    domain: 'Legal',
    parentId: 'legal-affairs',
    description: 'Managing contracts throughout their lifecycle'
  },
  {
    id: 'contract-management-2',
    name: 'Contract Management ',
    level: 3,
    category: 'core',
    domain: 'Legal',
    parentId: 'legal-affairs',
    description: 'Additional aspects of managing contracts'
  },
  {
    id: 'corporate-law-management-1',
    name: 'Corporate Law Management',
    level: 3,
    category: 'core',
    domain: 'Legal',
    parentId: 'legal-affairs',
    description: 'Managing corporate legal matters and compliance'
  },
  {
    id: 'corporate-law-management-2',
    name: 'Corporate Law Management ',
    level: 3,
    category: 'core',
    domain: 'Legal',
    parentId: 'legal-affairs',
    description: 'Additional aspects of managing corporate legal matters'
  },
  {
    id: 'litigation-management-1',
    name: 'Litigation Management',
    level: 3,
    category: 'core',
    domain: 'Legal',
    parentId: 'legal-affairs',
    description: 'Managing litigation and legal disputes'
  },
  {
    id: 'litigation-management-2',
    name: 'Litigation Management ',
    level: 3,
    category: 'core',
    domain: 'Legal',
    parentId: 'legal-affairs',
    description: 'Additional aspects of managing litigation and legal disputes'
  }
];

// Level 3 capabilities for Risk Management
const level3RiskManagementCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'risk-mitigation',
    name: 'Risk Mitigation',
    level: 3,
    category: 'core',
    domain: 'Legal',
    parentId: 'risk-management',
    description: 'Implementing strategies to mitigate identified risks'
  },
  {
    id: 'risk-transparency',
    name: 'Risk Transparency',
    level: 3,
    category: 'core',
    domain: 'Legal',
    parentId: 'risk-management',
    description: 'Ensuring transparency in risk identification and management'
  }
];

// Level 2 capabilities for Law, Patents & Compliance
const level2LawPatentsComplianceCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'compliance-data-privacy',
    name: 'Compliance & Data Privacy',
    level: 2,
    category: 'core',
    domain: 'Legal',
    parentId: 'law-patents-compliance',
    description: 'Ensuring compliance with regulations and protecting data privacy',
    children: level3ComplianceDataPrivacyCapabilities
  },
  {
    id: 'insurance-management',
    name: 'Insurance Management',
    level: 2,
    category: 'core',
    domain: 'Legal',
    parentId: 'law-patents-compliance',
    description: 'Managing insurance policies and claims',
    children: []
  },
  {
    id: 'intellectual-property',
    name: 'Intellectual Property',
    level: 2,
    category: 'core',
    domain: 'Legal',
    parentId: 'law-patents-compliance',
    description: 'Managing intellectual property assets including patents, trademarks, and copyrights',
    children: level3IntellectualPropertyCapabilities
  },
  {
    id: 'legal-affairs',
    name: 'Legal Affairs',
    level: 2,
    category: 'core',
    domain: 'Legal',
    parentId: 'law-patents-compliance',
    description: 'Managing legal matters and providing legal counsel',
    children: level3LegalAffairsCapabilities
  },
  {
    id: 'risk-management',
    name: 'Risk Management',
    level: 2,
    category: 'core',
    domain: 'Legal',
    parentId: 'law-patents-compliance',
    description: 'Identifying, assessing, and managing risks',
    children: level3RiskManagementCapabilities
  }
];

// Level 3 capabilities for Asset Performance Management
const level3AssetPerformanceManagementCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'asset-criticality-management',
    name: 'Asset Criticality Management',
    level: 3,
    category: 'core',
    domain: 'Facilities',
    parentId: 'asset-performance-management',
    description: 'Managing and prioritizing assets based on their criticality to operations'
  },
  {
    id: 'asset-health-management',
    name: 'Asset Health Management',
    level: 3,
    category: 'core',
    domain: 'Facilities',
    parentId: 'asset-performance-management',
    description: 'Monitoring and managing the health and condition of assets'
  },
  {
    id: 'asset-strategy-management',
    name: 'Asset Strategy Management',
    level: 3,
    category: 'core',
    domain: 'Facilities',
    parentId: 'asset-performance-management',
    description: 'Developing and implementing strategies for asset management'
  },
  {
    id: 'mechanical-integrity-management',
    name: 'Mechanical Integrity Management',
    level: 3,
    category: 'core',
    domain: 'Facilities',
    parentId: 'asset-performance-management',
    description: 'Ensuring the mechanical integrity of assets and equipment'
  }
];

// Level 3 capabilities for Assets, Equipment & Tools Management
const level3AssetsEquipmentToolsManagementCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'asset-information-governance',
    name: 'Asset Information Governance',
    level: 3,
    category: 'core',
    domain: 'Facilities',
    parentId: 'assets-equipment-tools-management',
    description: 'Governing and managing asset information and data'
  },
  {
    id: 'asset-lifecycle-management',
    name: 'Asset Lifecycle Management (ALCM)',
    level: 3,
    category: 'core',
    domain: 'Facilities',
    parentId: 'assets-equipment-tools-management',
    description: 'Managing assets throughout their lifecycle from acquisition to disposal'
  },
  {
    id: 'asset-network-collaboration',
    name: 'Asset Network & Collaboration',
    level: 3,
    category: 'core',
    domain: 'Facilities',
    parentId: 'assets-equipment-tools-management',
    description: 'Facilitating collaboration and networking around asset management'
  },
  {
    id: 'assets-equipment-tools-installation',
    name: 'Assets, Equipment & Tools Installation Management',
    level: 3,
    category: 'core',
    domain: 'Facilities',
    parentId: 'assets-equipment-tools-management',
    description: 'Managing the installation of assets, equipment, and tools'
  }
];

// Level 3 capabilities for Building & Plant Engineering
const level3BuildingPlantEngineeringCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'construction-management',
    name: 'Construction Management',
    level: 3,
    category: 'core',
    domain: 'Facilities',
    parentId: 'building-plant-engineering',
    description: 'Managing construction projects for buildings and plants'
  },
  {
    id: 'engineering-design',
    name: 'Engineering Design',
    level: 3,
    category: 'core',
    domain: 'Facilities',
    parentId: 'building-plant-engineering',
    description: 'Designing engineering solutions for buildings and plants'
  },
  {
    id: 'plant-commissioning-handover',
    name: 'Plant Commissioning & Handover',
    level: 3,
    category: 'core',
    domain: 'Facilities',
    parentId: 'building-plant-engineering',
    description: 'Managing the commissioning and handover of plants'
  }
];

// Level 3 capabilities for Location Operations Management
const level3LocationOperationsManagementCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'energy-utility-infrastructure',
    name: 'Energy & Utility Infrastructure Management',
    level: 3,
    category: 'core',
    domain: 'Facilities',
    parentId: 'location-operations-management',
    description: 'Managing energy and utility infrastructure for locations'
  },
  {
    id: 'exterior-grounds-management',
    name: 'Exterior & Grounds Management',
    level: 3,
    category: 'core',
    domain: 'Facilities',
    parentId: 'location-operations-management',
    description: 'Managing exterior spaces and grounds'
  },
  {
    id: 'physical-security',
    name: 'Physical Security',
    level: 3,
    category: 'core',
    domain: 'Facilities',
    parentId: 'location-operations-management',
    description: 'Ensuring physical security of locations and facilities'
  },
  {
    id: 'service-management',
    name: 'Service Management',
    level: 3,
    category: 'core',
    domain: 'Facilities',
    parentId: 'location-operations-management',
    description: 'Managing services for locations and facilities'
  },
  {
    id: 'workspace-asset-management',
    name: 'Workspace & Asset Management',
    level: 3,
    category: 'core',
    domain: 'Facilities',
    parentId: 'location-operations-management',
    description: 'Managing workspaces and assets within locations'
  }
];

// Level 3 capabilities for Location Strategy & Development
const level3LocationStrategyDevelopmentCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'building-information-modeling',
    name: 'Building Information Modeling',
    level: 3,
    category: 'core',
    domain: 'Facilities',
    parentId: 'location-strategy-development',
    description: 'Using building information modeling for location planning and development'
  },
  {
    id: 'design-build-equipment-facilities',
    name: 'Design & Build Equipment & Facilities',
    level: 3,
    category: 'core',
    domain: 'Facilities',
    parentId: 'location-strategy-development',
    description: 'Designing and building equipment and facilities'
  },
  {
    id: 'facility-planning',
    name: 'Facility Planning',
    level: 3,
    category: 'core',
    domain: 'Facilities',
    parentId: 'location-strategy-development',
    description: 'Planning for facility development and expansion'
  },
  {
    id: 'modeling-optimization-management',
    name: 'Modeling & Optimization Management',
    level: 3,
    category: 'core',
    domain: 'Facilities',
    parentId: 'location-strategy-development',
    description: 'Modeling and optimizing location and facility layouts'
  },
  {
    id: 'property-strategy-vision',
    name: 'Property Strategy & Vision Development',
    level: 3,
    category: 'core',
    domain: 'Facilities',
    parentId: 'location-strategy-development',
    description: 'Developing property strategies and visions'
  },
  {
    id: 'workplace-asset-provisioning',
    name: 'Workplace & Asset Provisioning',
    level: 3,
    category: 'core',
    domain: 'Facilities',
    parentId: 'location-strategy-development',
    description: 'Provisioning workplaces and assets for locations'
  }
];

// Level 3 capabilities for Maintenance Work Management
const level3MaintenanceWorkManagementCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'maintenance-work-order-management',
    name: 'Maintenance Work Order Management',
    level: 3,
    category: 'core',
    domain: 'Facilities',
    parentId: 'maintenance-work-management',
    description: 'Managing maintenance work orders and tasks'
  },
  {
    id: 'work-permit-isolations-management',
    name: 'Work Permit & Isolations Management',
    level: 3,
    category: 'core',
    domain: 'Facilities',
    parentId: 'maintenance-work-management',
    description: 'Managing work permits and isolations for maintenance activities'
  }
];

// Level 3 capabilities for Technical Material Management
const level3TechnicalMaterialManagementCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'material-parts-quality-management',
    name: 'Material & Parts Quality Management',
    level: 3,
    category: 'core',
    domain: 'Facilities',
    parentId: 'technical-material-management',
    description: 'Managing the quality of materials and parts'
  },
  {
    id: 'spare-parts-management-optimization',
    name: 'Spare Parts Management & Optimization',
    level: 3,
    category: 'core',
    domain: 'Facilities',
    parentId: 'technical-material-management',
    description: 'Managing and optimizing spare parts inventory'
  }
];

// Level 2 capabilities for Location, Facility, Engineering & Asset Management
const level2LocationFacilityEngineeringAssetManagementCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'asset-performance-management',
    name: 'Asset Performance Management',
    level: 2,
    category: 'core',
    domain: 'Facilities',
    parentId: 'location-facility-engineering-asset-management',
    description: 'Managing and optimizing asset performance',
    children: level3AssetPerformanceManagementCapabilities
  },
  {
    id: 'assets-equipment-tools-management',
    name: 'Assets, Equipment & Tools Management',
    level: 2,
    category: 'core',
    domain: 'Facilities',
    parentId: 'location-facility-engineering-asset-management',
    description: 'Managing assets, equipment, and tools',
    children: level3AssetsEquipmentToolsManagementCapabilities
  },
  {
    id: 'building-plant-engineering',
    name: 'Building & Plant Engineering',
    level: 2,
    category: 'core',
    domain: 'Facilities',
    parentId: 'location-facility-engineering-asset-management',
    description: 'Engineering for buildings and plants',
    children: level3BuildingPlantEngineeringCapabilities
  },
  {
    id: 'location-operations-management',
    name: 'Location Operations Management',
    level: 2,
    category: 'core',
    domain: 'Facilities',
    parentId: 'location-facility-engineering-asset-management',
    description: 'Managing location operations',
    children: level3LocationOperationsManagementCapabilities
  },
  {
    id: 'location-strategy-development',
    name: 'Location Strategy & Development',
    level: 2,
    category: 'core',
    domain: 'Facilities',
    parentId: 'location-facility-engineering-asset-management',
    description: 'Developing location strategies',
    children: level3LocationStrategyDevelopmentCapabilities
  },
  {
    id: 'maintenance-performance-monitoring',
    name: 'Maintenance Performance Monitoring',
    level: 2,
    category: 'core',
    domain: 'Facilities',
    parentId: 'location-facility-engineering-asset-management',
    description: 'Monitoring maintenance performance',
    children: []
  },
  {
    id: 'maintenance-work-management',
    name: 'Maintenance Work Management',
    level: 2,
    category: 'core',
    domain: 'Facilities',
    parentId: 'location-facility-engineering-asset-management',
    description: 'Managing maintenance work',
    children: level3MaintenanceWorkManagementCapabilities
  },
  {
    id: 'technical-material-management',
    name: 'Technical Material Management',
    level: 2,
    category: 'core',
    domain: 'Facilities',
    parentId: 'location-facility-engineering-asset-management',
    description: 'Managing technical materials',
    children: level3TechnicalMaterialManagementCapabilities
  }
];

// Level 3 capabilities for Delivery & Transportation Management
const level3DeliveryTransportationCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: '3pl-inventory-management',
    name: '3PL inventory Management',
    level: 3,
    category: 'core',
    domain: 'Logistics',
    parentId: 'delivery-transportation-management',
    description: 'Managing inventory through third-party logistics providers'
  },
  {
    id: 'delivery-complaints-management',
    name: 'Delivery Complaints Management',
    level: 3,
    category: 'core',
    domain: 'Logistics',
    parentId: 'delivery-transportation-management',
    description: 'Managing and resolving delivery-related complaints'
  },
  {
    id: 'freight-cost-management',
    name: 'Freight Cost Management',
    level: 3,
    category: 'core',
    domain: 'Logistics',
    parentId: 'delivery-transportation-management',
    description: 'Managing and optimizing freight costs'
  },
  {
    id: 'shipment-tracking-1',
    name: 'Shipment Tracking',
    level: 3,
    category: 'core',
    domain: 'Logistics',
    parentId: 'delivery-transportation-management',
    description: 'Tracking shipments throughout the delivery process'
  },
  {
    id: 'shipment-tracking-2',
    name: 'Shipment Tracking ',
    level: 3,
    category: 'core',
    domain: 'Logistics',
    parentId: 'delivery-transportation-management',
    description: 'Additional aspects of tracking shipments'
  },
  {
    id: 'transport-mode-management',
    name: 'Transport Mode Management',
    level: 3,
    category: 'core',
    domain: 'Logistics',
    parentId: 'delivery-transportation-management',
    description: 'Managing different modes of transportation'
  },
  {
    id: 'transport-planning-ordering-execution',
    name: 'Transport planning, ordering & execution',
    level: 3,
    category: 'core',
    domain: 'Logistics',
    parentId: 'delivery-transportation-management',
    description: 'Planning, ordering, and executing transportation activities'
  }
];

// Level 3 capabilities for Goods Issuing
const level3GoodsIssuingCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'handling-unit-management',
    name: 'Handling Unit Management',
    level: 3,
    category: 'core',
    domain: 'Logistics',
    parentId: 'goods-issuing',
    description: 'Managing handling units for goods issuing'
  },
  {
    id: 'picking-pack',
    name: 'Picking & Pack',
    level: 3,
    category: 'core',
    domain: 'Logistics',
    parentId: 'goods-issuing',
    description: 'Managing picking and packing processes for goods issuing'
  },
  {
    id: 'shipment-notification',
    name: 'Shipment Notification',
    level: 3,
    category: 'core',
    domain: 'Logistics',
    parentId: 'goods-issuing',
    description: 'Managing shipment notifications for goods issuing'
  }
];

// Level 3 capabilities for Hazardous Goods Management
const level3HazardousGoodsManagementCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'dangerous-goods-checks-documents',
    name: 'Dangerous Goods Checks & Documents',
    level: 3,
    category: 'core',
    domain: 'Logistics',
    parentId: 'hazardous-goods-management',
    description: 'Performing checks and managing documents for dangerous goods'
  },
  {
    id: 'hazardous-material-labeling',
    name: 'Hazardous Material Labeling',
    level: 3,
    category: 'core',
    domain: 'Logistics',
    parentId: 'hazardous-goods-management',
    description: 'Managing labeling for hazardous materials'
  },
  {
    id: 'sds-authoring-provisioning',
    name: 'SDS Authoring & Provisioning',
    level: 3,
    category: 'core',
    domain: 'Logistics',
    parentId: 'hazardous-goods-management',
    description: 'Authoring and provisioning Safety Data Sheets'
  },
  {
    id: 'specification-database-recipe-composition',
    name: 'Specification Database Recipe & Composition',
    level: 3,
    category: 'core',
    domain: 'Logistics',
    parentId: 'hazardous-goods-management',
    description: 'Managing specification databases for recipes and compositions'
  },
  {
    id: 'substance-classification',
    name: 'Substance Classification',
    level: 3,
    category: 'core',
    domain: 'Logistics',
    parentId: 'hazardous-goods-management',
    description: 'Classifying substances for hazardous goods management'
  },
  {
    id: 'substance-notification',
    name: 'Substance Notification',
    level: 3,
    category: 'core',
    domain: 'Logistics',
    parentId: 'hazardous-goods-management',
    description: 'Managing substance notifications for hazardous goods'
  },
  {
    id: 'substance-volume-tracking',
    name: 'Substance Volume Tracking',
    level: 3,
    category: 'core',
    domain: 'Logistics',
    parentId: 'hazardous-goods-management',
    description: 'Tracking volumes of substances for hazardous goods management'
  }
];

// Level 3 capabilities for Site Logistics
const level3SiteLogisticsCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'hub-logistics-crossdocking',
    name: 'Hub Logistics (crossdocking)',
    level: 3,
    category: 'core',
    domain: 'Logistics',
    parentId: 'site-logistics',
    description: 'Managing hub logistics and crossdocking operations'
  },
  {
    id: 'yard-logistics',
    name: 'Yard Logistics',
    level: 3,
    category: 'core',
    domain: 'Logistics',
    parentId: 'site-logistics',
    description: 'Managing yard logistics operations'
  }
];

// Level 3 capabilities for Warehouse Management
const level3WarehouseManagementCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'goods-receivement',
    name: 'Goods Receivement',
    level: 3,
    category: 'core',
    domain: 'Logistics',
    parentId: 'warehouse-management',
    description: 'Managing the receipt of goods in warehouses'
  },
  {
    id: 'hazardous-material-warehouse-management',
    name: 'Hazardous Material Warehouse Management',
    level: 3,
    category: 'core',
    domain: 'Logistics',
    parentId: 'warehouse-management',
    description: 'Managing warehouses for hazardous materials'
  },
  {
    id: 'physical-inventory-management-1',
    name: 'Physical Inventory Management',
    level: 3,
    category: 'core',
    domain: 'Logistics',
    parentId: 'warehouse-management',
    description: 'Managing physical inventory in warehouses'
  },
  {
    id: 'physical-inventory-management-2',
    name: 'Physical Inventory Management ',
    level: 3,
    category: 'core',
    domain: 'Logistics',
    parentId: 'warehouse-management',
    description: 'Additional aspects of managing physical inventory'
  },
  {
    id: 'stock-management',
    name: 'Stock Management ',
    level: 3,
    category: 'core',
    domain: 'Logistics',
    parentId: 'warehouse-management',
    description: 'Managing stock levels and movements in warehouses'
  },
  {
    id: 'warehouse-costs-management',
    name: 'Warehouse Costs Management ',
    level: 3,
    category: 'core',
    domain: 'Logistics',
    parentId: 'warehouse-management',
    description: 'Managing and optimizing warehouse costs'
  }
];

// Level 2 capabilities for Logistics
const level2LogisticsCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'delivery-transportation-management',
    name: 'Delivery & Transportation Management',
    level: 2,
    category: 'core',
    domain: 'Logistics',
    parentId: 'logistics',
    description: 'Managing delivery and transportation processes',
    children: level3DeliveryTransportationCapabilities
  },
  {
    id: 'goods-issuing',
    name: 'Goods issuing',
    level: 2,
    category: 'core',
    domain: 'Logistics',
    parentId: 'logistics',
    description: 'Managing the process of issuing goods',
    children: level3GoodsIssuingCapabilities
  },
  {
    id: 'hazardous-goods-management',
    name: 'hazardous goods management',
    level: 2,
    category: 'core',
    domain: 'Logistics',
    parentId: 'logistics',
    description: 'Managing hazardous goods throughout the logistics process',
    children: level3HazardousGoodsManagementCapabilities
  },
  {
    id: 'site-logistics',
    name: 'Site Logistics',
    level: 2,
    category: 'core',
    domain: 'Logistics',
    parentId: 'logistics',
    description: 'Managing logistics operations at specific sites',
    children: level3SiteLogisticsCapabilities
  },
  {
    id: 'warehouse-management',
    name: 'Warehouse Management',
    level: 2,
    category: 'core',
    domain: 'Logistics',
    parentId: 'logistics',
    description: 'Managing warehouse operations and inventory',
    children: level3WarehouseManagementCapabilities
  }
];

// Level 3 capabilities for Dynamic Field Optimization
const level3DynamicFieldOptimizationCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'dynamic-field-optimization',
    name: 'Dynamic Field Optimization',
    level: 3,
    category: 'core',
    domain: 'Management',
    parentId: 'operational-excellence',
    description: 'Optimizing field operations dynamically based on real-time data and analytics'
  }
];

// Level 2 capabilities for Performance Management
const level2PerformanceManagementCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'integrated-performance-management',
    name: 'Integrated Performance Management (across the Value Chain)',
    level: 2,
    category: 'core',
    domain: 'Management',
    parentId: 'performance-management',
    description: 'Managing performance across the entire value chain in an integrated manner',
    children: []
  },
  {
    id: 'operational-excellence',
    name: 'Operational Excellence',
    level: 2,
    category: 'core',
    domain: 'Management',
    parentId: 'performance-management',
    description: 'Achieving operational excellence through continuous improvement and optimization',
    children: level3DynamicFieldOptimizationCapabilities
  },
  {
    id: 'performance-improvement',
    name: 'Performance Improvement',
    level: 2,
    category: 'core',
    domain: 'Management',
    parentId: 'performance-management',
    description: 'Implementing initiatives to improve organizational performance',
    children: []
  },
  {
    id: 'performance-monitoring',
    name: 'Performance Monitoring',
    level: 2,
    category: 'core',
    domain: 'Management',
    parentId: 'performance-management',
    description: 'Monitoring and measuring performance against key metrics and targets',
    children: []
  }
];

// Level 1 Core Capabilities (dark blue boxes)
export const level1CoreCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'after-sales-management',
    name: 'After Sales Management',
    level: 1,
    category: 'core',
    domain: 'After Sales',
    description: 'Capabilities related to after sales service and management',
    children: level2AfterSalesCapabilities
  },
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
    id: 'communications',
    name: 'Communications',
    level: 1,
    category: 'core',
    domain: 'Communications',
    description: 'Capabilities related to internal and external communications',
    children: level2CommunicationsCapabilities
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
    id: 'corporate-transformation-innovation',
    name: 'Corporate Transformation & Innovation',
    level: 1,
    category: 'core',
    domain: 'Innovation',
    description: 'Capabilities related to corporate transformation and innovation initiatives',
    children: level2CorporateTransformationInnovationCapabilities
  },
  {
    id: 'customer-service-management',
    name: 'Customer Service Management',
    level: 1,
    category: 'core',
    domain: 'Customer Service',
    description: 'Capabilities related to customer service and support',
    children: level2CustomerServiceCapabilities
  },
  {
    id: 'data-analytics',
    name: 'Data & Analytics',
    level: 1,
    category: 'core',
    domain: 'Data',
    description: 'Capabilities related to data management and analytics',
    children: level2DataAnalyticsCapabilities
  },
  {
    id: 'enterprise-management',
    name: 'Enterprise Management',
    level: 1,
    category: 'core',
    domain: 'Management',
    description: 'Capabilities related to enterprise-wide management',
    children: level2EnterpriseManagementCapabilities
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
    id: 'hse',
    name: 'Health, Safety & Environmental Protection',
    level: 1,
    category: 'core',
    domain: 'HSE',
    description: 'Capabilities related to health, safety, and environmental protection',
    children: level2HSECapabilities
  },
  {
    id: 'hr-organization',
    name: 'Human Resource & Organization',
    level: 1,
    category: 'core',
    domain: 'HR',
    description: 'Capabilities related to human resources and organizational management',
    children: level2HROrganizationCapabilities
  },
  {
    id: 'it-enabling-technology',
    name: 'IT/Enabling Technology',
    level: 1,
    category: 'core',
    domain: 'IT',
    description: 'Capabilities related to information technology and enabling technologies',
    children: level2ITEnablingTechnologyCapabilities
  },
  {
    id: 'law-patents-compliance',
    name: 'Law, Patents & Compliance',
    level: 1,
    category: 'core',
    domain: 'Legal',
    description: 'Capabilities related to legal matters, patents, and compliance',
    children: level2LawPatentsComplianceCapabilities
  },
  {
    id: 'location-facility-engineering-asset-management',
    name: 'Location, Facility, Engineering & Asset Management',
    level: 1,
    category: 'core',
    domain: 'Facilities',
    description: 'Capabilities related to location, facility, engineering, and asset management',
    children: level2LocationFacilityEngineeringAssetManagementCapabilities
  },
  {
    id: 'logistics',
    name: 'Logistics (Warehousing & Transportation)',
    level: 1,
    category: 'core',
    domain: 'Logistics',
    description: 'Capabilities related to logistics, warehousing, and transportation',
    children: level2LogisticsCapabilities
  },
  {
    id: 'performance-management',
    name: 'Performance Management',
    level: 1,
    category: 'core',
    domain: 'Management',
    description: 'Capabilities related to performance management',
    children: level2PerformanceManagementCapabilities
  },
  {
    id: 'pharma-commercial-engagement',
    name: 'Pharma Commercial Engagement',
    level: 1,
    category: 'core',
    domain: 'Pharma',
    description: 'Capabilities related to pharmaceutical commercial engagement',
    children: []
  },
  {
    id: 'pharma-commercial-environment',
    name: 'Pharma Commercial Environment',
    level: 1,
    category: 'core',
    domain: 'Pharma',
    description: 'Capabilities related to pharmaceutical commercial environment',
    children: []
  },
  {
    id: 'pharma-commercial-improvement',
    name: 'Pharma Commercial Improvement',
    level: 1,
    category: 'core',
    domain: 'Pharma',
    description: 'Capabilities related to pharmaceutical commercial improvement',
    children: []
  },
  {
    id: 'pharma-commercial-insights',
    name: 'Pharma Commercial Insights',
    level: 1,
    category: 'core',
    domain: 'Pharma',
    description: 'Capabilities related to pharmaceutical commercial insights',
    children: []
  },
  {
    id: 'pharma-commercial-proposition',
    name: 'Pharma Commercial Proposition',
    level: 1,
    category: 'core',
    domain: 'Pharma',
    description: 'Capabilities related to pharmaceutical commercial proposition',
    children: []
  },
  {
    id: 'pharma-commercial-segmentation',
    name: 'Pharma Commercial Segmentation',
    level: 1,
    category: 'core',
    domain: 'Pharma',
    description: 'Capabilities related to pharmaceutical commercial segmentation',
    children: []
  },
  {
    id: 'pharma-commercial-strategy',
    name: 'Pharma Commercial Strategy',
    level: 1,
    category: 'core',
    domain: 'Pharma',
    description: 'Capabilities related to pharmaceutical commercial strategy',
    children: []
  },
  {
    id: 'pharma-mapv-engagement',
    name: 'Pharma MAPV Engagement',
    level: 1,
    category: 'core',
    domain: 'Pharma',
    description: 'Capabilities related to pharmaceutical MAPV engagement',
    children: []
  },
  {
    id: 'pharma-mapv-evidence',
    name: 'Pharma MAPV Evidence',
    level: 1,
    category: 'core',
    domain: 'Pharma',
    description: 'Capabilities related to pharmaceutical MAPV evidence',
    children: []
  },
  {
    id: 'pharma-mapv-foundation',
    name: 'Pharma MAPV Foundation',
    level: 1,
    category: 'core',
    domain: 'Pharma',
    description: 'Capabilities related to pharmaceutical MAPV foundation',
    children: []
  },
  {
    id: 'pharma-mapv-pharmacovigilance',
    name: 'Pharma MAPV Pharmacovigilance',
    level: 1,
    category: 'core',
    domain: 'Pharma',
    description: 'Capabilities related to pharmaceutical MAPV pharmacovigilance',
    children: []
  },
  {
    id: 'pharma-rd-cpd',
    name: 'Pharma R&D CPD',
    level: 1,
    category: 'core',
    domain: 'Pharma R&D',
    description: 'Capabilities related to pharmaceutical R&D CPD',
    children: []
  },
  {
    id: 'pharma-rd-data',
    name: 'Pharma R&D Data',
    level: 1,
    category: 'core',
    domain: 'Pharma R&D',
    description: 'Capabilities related to pharmaceutical R&D data',
    children: []
  },
  {
    id: 'pharma-rd-disease',
    name: 'Pharma R&D Disease',
    level: 1,
    category: 'core',
    domain: 'Pharma R&D',
    description: 'Capabilities related to pharmaceutical R&D disease research',
    children: []
  },
  {
    id: 'pharma-rd-enabling',
    name: 'Pharma R&D Enabling',
    level: 1,
    category: 'core',
    domain: 'Pharma R&D',
    description: 'Capabilities related to pharmaceutical R&D enabling functions',
    children: []
  },
  {
    id: 'pharma-rd-modality',
    name: 'Pharma R&D Modality',
    level: 1,
    category: 'core',
    domain: 'Pharma R&D',
    description: 'Capabilities related to pharmaceutical R&D modality',
    children: []
  },
  {
    id: 'pharma-rd-preclinical',
    name: 'Pharma R&D Preclinical',
    level: 1,
    category: 'core',
    domain: 'Pharma R&D',
    description: 'Capabilities related to pharmaceutical R&D preclinical research',
    children: []
  },
  {
    id: 'pharma-rd-protocol',
    name: 'Pharma R&D Protocol',
    level: 1,
    category: 'core',
    domain: 'Pharma R&D',
    description: 'Capabilities related to pharmaceutical R&D protocol development',
    children: []
  },
  {
    id: 'pharma-rd-research',
    name: 'Pharma R&D Research',
    level: 1,
    category: 'core',
    domain: 'Pharma R&D',
    description: 'Capabilities related to pharmaceutical R&D research',
    children: []
  },
  {
    id: 'pharma-rd-site-1',
    name: 'Pharma R&D Site',
    level: 1,
    category: 'core',
    domain: 'Pharma R&D',
    description: 'Capabilities related to pharmaceutical R&D site management (1)',
    children: []
  },
  {
    id: 'pharma-rd-site-2',
    name: 'Pharma R&D Site',
    level: 1,
    category: 'core',
    domain: 'Pharma R&D',
    description: 'Capabilities related to pharmaceutical R&D site management (2)',
    children: []
  },
  {
    id: 'pharma-rd-site-3',
    name: 'Pharma R&D Site',
    level: 1,
    category: 'core',
    domain: 'Pharma R&D',
    description: 'Capabilities related to pharmaceutical R&D site management (3)',
    children: []
  },
  {
    id: 'pharma-rd-study',
    name: 'Pharma R&D Study',
    level: 1,
    category: 'core',
    domain: 'Pharma R&D',
    description: 'Capabilities related to pharmaceutical R&D study management',
    children: []
  },
  {
    id: 'pharma-rd-tmf',
    name: 'Pharma R&D TMF',
    level: 1,
    category: 'core',
    domain: 'Pharma R&D',
    description: 'Capabilities related to pharmaceutical R&D TMF',
    children: []
  },
  {
    id: 'pharma-rd-translational',
    name: 'Pharma R&D Translational',
    level: 1,
    category: 'core',
    domain: 'Pharma R&D',
    description: 'Capabilities related to pharmaceutical R&D translational research',
    children: []
  },
  {
    id: 'procurement-sourcing',
    name: 'Procurement & Sourcing',
    level: 1,
    category: 'core',
    domain: 'Procurement',
    description: 'Capabilities related to procurement and sourcing',
    children: []
  },
  {
    id: 'product-service-discovery-development-management',
    name: 'Product & Service Discovery, Development & Management',
    level: 1,
    category: 'core',
    domain: 'Product',
    description: 'Capabilities related to product and service discovery, development, and management',
    children: []
  },
  {
    id: 'product-service-marketing',
    name: 'Product & Service Marketing',
    level: 1,
    category: 'core',
    domain: 'Marketing',
    description: 'Capabilities related to product and service marketing',
    children: []
  },
  {
    id: 'production-manufacturing',
    name: 'Production/Manufacturing',
    level: 1,
    category: 'core',
    domain: 'Production',
    description: 'Capabilities related to production and manufacturing',
    children: []
  },
  {
    id: 'public-affairs-sustainability',
    name: 'Public Affairs & Sustainability',
    level: 1,
    category: 'core',
    domain: 'Public Affairs',
    description: 'Capabilities related to public affairs and sustainability',
    children: []
  },
  {
    id: 'quality-management',
    name: 'Quality/Quality Management System',
    level: 1,
    category: 'core',
    domain: 'Quality',
    description: 'Capabilities related to quality and quality management systems',
    children: []
  },
  {
    id: 'sales-management',
    name: 'Sales Management',
    level: 1,
    category: 'core',
    domain: 'Sales',
    description: 'Capabilities related to sales management',
    children: []
  },
  {
    id: 'supply-chain-resource-planning-alignment',
    name: 'Supply Chain Resource Planning & Alignment',
    level: 1,
    category: 'core',
    domain: 'Supply Chain',
    description: 'Capabilities related to supply chain resource planning and alignment',
    children: []
  }
];

// Level 1 Enabling Capabilities - now empty as we're using a single list
export const level1EnablingCapabilities: BusinessCapabilityHierarchy[] = [];

// Level 2 Core Capabilities (medium blue boxes) - Example for Product & Service Discovery, Development & Management
const level2DevelopCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'develop-discovery',
    name: 'Discovery & Concept Management',
    level: 2,
    category: 'core',
    domain: 'Product',
    parentId: 'product-service-discovery-development-management',
    description: 'Managing the discovery and concept development process',
    children: []
  },
  {
    id: 'develop-innovation',
    name: 'Innovation Management',
    level: 2,
    category: 'core',
    domain: 'Product',
    parentId: 'product-service-discovery-development-management',
    description: 'Managing the innovation process from ideation to implementation',
    children: []
  },
  {
    id: 'develop-product',
    name: 'Product Development',
    level: 2,
    category: 'core',
    domain: 'Product',
    parentId: 'product-service-discovery-development-management',
    description: 'Creating and evolving products from concept to market-ready solutions',
    children: []
  },
  {
    id: 'develop-research',
    name: 'Research',
    level: 2,
    category: 'core',
    domain: 'Product',
    parentId: 'product-service-discovery-development-management',
    description: 'Scientific research activities to discover new knowledge and applications',
    children: []
  }
];

// Level 3 Core Capabilities (light blue boxes) - Example for Discovery & Concept Management
const level3DiscoveryCapabilities: BusinessCapabilityHierarchy[] = [
  {
    id: 'develop-discovery-management',
    name: 'Discovery Management',
    level: 3,
    category: 'core',
    domain: 'Product',
    parentId: 'develop-discovery',
    description: 'Managing the discovery process for new products and services'
  },
  {
    id: 'develop-concept-development',
    name: 'Concept Development',
    level: 3,
    category: 'core',
    domain: 'Product',
    parentId: 'develop-discovery',
    description: 'Developing concepts for new products and services'
  },
  {
    id: 'develop-concept-validation',
    name: 'Concept Validation',
    level: 3,
    category: 'core',
    domain: 'Product',
    parentId: 'develop-discovery',
    description: 'Validating concepts for new products and services'
  }
];

// Add level 3 capabilities to their parent level 2 capabilities
level2DevelopCapabilities[0].children = level3DiscoveryCapabilities;

// Add level 2 capabilities to their parent level 1 capabilities
const productServiceIndex = level1CoreCapabilities.findIndex(cap => cap.id === 'product-service-discovery-development-management');
if (productServiceIndex !== -1) {
  level1CoreCapabilities[productServiceIndex].children = level2DevelopCapabilities;
}

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
