import React, { useState, useEffect } from "react";

import Navbar from "../../components/Navbar";
import Heading from "../../components/Heading";
import Subheading from "../../components/SubHeading";
import CategoriesList from "../../components/CategoriesList";
import Footer from "../../components/Footer";

import categoryService from "../../Services/categoryService";

export default function CategoriesPage() {
  const [categories, setCategories] = useState();

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const categories = await categoryService.getCategories();
        setCategories(categories.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPageData();
  }, []);
  console.log(categories)

  // if (!categories) {
  //   return null;
  // }

  return (
    <>
      <Navbar />
      <div className="container">
        <Heading />
        <Subheading subHeading={"Categories"} />
        {categories ?
        <CategoriesList categories={categories} />
: <div>No categories to display.</div>
        }
        <Footer />
      </div>
    </>
  );
}