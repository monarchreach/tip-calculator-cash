// Function to get calculator breadcrumbs
export function getBreadcrumbsForCalculator(calculator: any) {
  return [
    { name: "Home", url: "/" },
    { name: "Calculators", url: "/calculators" },
    { name: calculator.category, url: `/calculators#${calculator.category.toLowerCase().replace(/\s+/g, "-")}` },
    { name: calculator.title, url: `/calculators/${calculator.slug}` },
  ]
} 