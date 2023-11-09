export const countries = [
  { title: "Australia", value: "AU" },
  { title: "Brazil", value: "BR" },
  { title: "Canada", value: "CA" },
  { title: "Switzerland", value: "CH" },
  { title: "Germany", value: "DE" },
  { title: "Denmark", value: "DK" },
  { title: "Spain", value: "ES" },
  { title: "Finland", value: "FI" },
  { title: "France", value: "FR" },
  { title: "United Kingdom", value: "GB" },
  { title: "Ireland", value: "IE" },
  { title: "India", value: "IN" },
  { title: "Iran", value: "IR" },
  { title: "Mexico", value: "MX" },
  { title: "Netherlands", value: "NL" },
  { title: "Norway", value: "NO" },
  { title: "New Zealand", value: "NZ" },
  { title: "Serbia", value: "RS" },
  { title: "Turkey", value: "TR" },
  { title: "Ukraine", value: "UA" },
  { title: "United States", value: "US" },
];
export const genders = [
  {
    title: "Male",
    value: "male",
  },
  {
    title: "Female",
    value: "female",
  },
];
export enum FilterTypeEnum {
  older,
  younger,
}
export const filters = [
  { title: "First older", value: FilterTypeEnum.older },
  { title: "First younger", value: FilterTypeEnum.younger },
];
