import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";

const DogDetails = lazy(() => import("../pages/DogDetails"));
const Home = lazy(() => import("../pages/Home"));
const Dogs = lazy(() => import("../pages/Dogs"));
const Gallery = lazy(() => import("./Gallery"));
const Subbreeds = lazy(() => import("./Subbreeds"));

export const App = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="dogs" element={<Dogs />} />
          <Route path="dogs/:dogId" element={<DogDetails />} >
            <Route path="subbreeds" element={<Subbreeds />} />
            <Route path="gallery" element={<Gallery />} />
        </Route>
        </Route>
      </Routes>
   
  );
};