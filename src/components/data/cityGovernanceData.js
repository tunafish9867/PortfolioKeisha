// Real figures pulled from Data_Ordinances_EGOVIndex_CMCIScore.xlsx
// Sheet: "E-Governance Component Breakdow" (22 highly urbanized Philippine cities)
export const cityGovernanceData = [
  { city: 'Pasay', onlineServices: 543, telecomInfra: 697, humanCapital: 608, unclassified: 53, egovIndex: 0.47, cmciScore: 56.78 },
  { city: 'Iloilo', onlineServices: 183, telecomInfra: 188, humanCapital: 184, unclassified: 0, egovIndex: 0.40, cmciScore: 51.04 },
  { city: 'Muntinlupa', onlineServices: 22, telecomInfra: 27, humanCapital: 22, unclassified: 3, egovIndex: 0.33, cmciScore: 36.30 },
  { city: 'Cagayan de Oro', onlineServices: 5, telecomInfra: 6, humanCapital: 6, unclassified: 0, egovIndex: 0.67, cmciScore: 48.61 },
  { city: 'Las Pinas', onlineServices: 0, telecomInfra: 2, humanCapital: 0, unclassified: 15, egovIndex: 0.33, cmciScore: 35.19 },
  { city: 'Iligan', onlineServices: 9, telecomInfra: 12, humanCapital: 12, unclassified: 0, egovIndex: 0.67, cmciScore: 42.05 },
  { city: 'Caloocan', onlineServices: 22, telecomInfra: 33, humanCapital: 21, unclassified: 0, egovIndex: 0.36, cmciScore: 49.59 },
  { city: 'Paranaque', onlineServices: 80, telecomInfra: 231, humanCapital: 173, unclassified: 1285, egovIndex: 0.54, cmciScore: 49.08 },
  { city: 'Davao', onlineServices: 54, telecomInfra: 60, humanCapital: 40, unclassified: 327, egovIndex: 0.57, cmciScore: 44.59 },
  { city: 'Pasig', onlineServices: 121, telecomInfra: 183, humanCapital: 127, unclassified: 485, egovIndex: 0.37, cmciScore: 44.59 },
  { city: 'Makati', onlineServices: 2005, telecomInfra: 1887, humanCapital: 2097, unclassified: 2809, egovIndex: 0.52, cmciScore: 47.11 },
  { city: 'Quezon', onlineServices: 134, telecomInfra: 222, humanCapital: 195, unclassified: 553, egovIndex: 0.56, cmciScore: 61.85 },
  { city: 'San Juan', onlineServices: 1, telecomInfra: 1, humanCapital: 2, unclassified: 290, egovIndex: 0.33, cmciScore: 34.15 },
  { city: 'Mandaluyong', onlineServices: 9, telecomInfra: 23, humanCapital: 6, unclassified: 261, egovIndex: 0.39, cmciScore: 37.74 },
  { city: 'Malabon', onlineServices: 1, telecomInfra: 3, humanCapital: 3, unclassified: 100, egovIndex: 0.67, cmciScore: 34.90 },
  { city: 'Manila', onlineServices: 58, telecomInfra: 134, humanCapital: 112, unclassified: 455, egovIndex: 0.57, cmciScore: 56.29 },
  { city: 'Bacolod', onlineServices: 52, telecomInfra: 52, humanCapital: 52, unclassified: 0, egovIndex: 0.00, cmciScore: 41.18 },
  { city: 'Mandaue', onlineServices: 607, telecomInfra: 604, humanCapital: 593, unclassified: 50, egovIndex: 0.60, cmciScore: 41.67 },
  { city: 'Valenzuela', onlineServices: 8, telecomInfra: 28, humanCapital: 0, unclassified: 93, egovIndex: 0.43, cmciScore: 44.21 },
  { city: 'Marikina', onlineServices: 2, telecomInfra: 10, humanCapital: 0, unclassified: 120, egovIndex: 0.40, cmciScore: 36.68 },
  { city: 'Gensan', onlineServices: 39, telecomInfra: 95, humanCapital: 50, unclassified: 584, egovIndex: 0.40, cmciScore: 42.19 },
  { city: 'Zamboanga', onlineServices: 34, telecomInfra: 65, humanCapital: 17, unclassified: 489, egovIndex: 0.45, cmciScore: 37.40 },
];

// Frequency of the top recurring legislative themes identified by the
// Structural Topic Model (95 topics total, from "STM Models Created.R")
export const ordinanceThemes = [
  { theme: 'Rules, regulations & declarations', count: 11 },
  { theme: 'Business & trade regulations', count: 10 },
  { theme: 'Organizational structure', count: 10 },
  { theme: 'Land use & zoning', count: 7 },
  { theme: 'Budget management & allocation', count: 6 },
  { theme: 'Health & sanitation', count: 5 },
  { theme: 'Barangay affairs & development', count: 4 },
  { theme: 'Employee benefits & welfare', count: 4 },
  { theme: 'Infrastructure', count: 3 },
  { theme: 'Waste management', count: 3 },
];

export const totalOrdinances = 13853;
export const totalCities = 22;
export const totalTopics = 95;
