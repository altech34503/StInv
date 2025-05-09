export interface Startup {
  startupId: number; // Maps to startup_id in the database
  nameStartup: string; // Maps to name_startup in the database
  overviewStartup: string; // Maps to overview_startup in the database
  countryId: number; // Maps to country_id in the database
  industryId: number; // Maps to industry_id in the database
  investmentSizeId: number; // Maps to investment_size in the database
}
