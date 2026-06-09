export type NavChildItem = {
  name: string;
  href: string;
};

export type NavItem = {
  name: string;
  href: string;
  children?: NavChildItem[];
};

export const navItems: NavItem[] = [
  {
    name: "مراقبت از پوست",
    href: "/products/category/skin-care",
    children: [
      { name: "همه محصولات", href: "/products/category/skin-care" },
      { name: "شوینده صورت", href: "/products/category/skin-care/cleanser" },
      { name: "مرطوب کننده", href: "/products/category/skin-care/moisturizing-cream" },
      { name: "ضد آفتاب", href: "/products/category/skin-care/sunscreen" },
      { name: "دور چشم", href: "/products/category/skin-care/eye-cream" },
    ],
  },
  {
    name: "مراقبت از مو",
    href: "/products/category/hair-care",
    children: [
      { name: "همه محصولات", href: "/products/category/hair-care" },
      { name: "شامپو", href: "/products/category/hair-care/shampoo" },
      { name: "ماسک مو", href: "/products/category/hair-care/hairmask" },
    ],
  },
  {
    name: "بلاگ",
    href: "/blog",
  },
  {
    name: "تماس با ما",
    href: "/contact",
  },
];
