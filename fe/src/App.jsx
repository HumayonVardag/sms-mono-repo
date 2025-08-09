import "./App.css";

import SignIn from "@Pages/SignIn";
import Home from "@Pages/Home";

import { Route, Routes, useNavigate } from "react-router-dom";
import ApplicationPage from "@Components/ApplicationPage";
import { useCallback } from "react";
import SIDEBAR_COMPONENTS from "./constants/sideBarElements";
import PROFILE_ELEMENTS from "./constants/profileElements";

function App() {
  const navigate = useNavigate()

  const handleSideBarComponentChange = useCallback(({ id, eventDispatcher }) => {
    if(eventDispatcher === 'sidebar') {
      const selectedComponent = SIDEBAR_COMPONENTS.find(
        (component) => component.id === id
      );

      if (selectedComponent) {
        navigate(selectedComponent.pathName);
      }
    } else if(eventDispatcher === 'appbar') {
      console.log("Profile component clicked with id:", id);
      const selectedComponent = PROFILE_ELEMENTS.find(
        (component) => component.id === id
      );

      if (selectedComponent) {
        navigate(selectedComponent.pathName);
      }
    }
  }, []);

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<SignIn />} />

        {SIDEBAR_COMPONENTS.map((component) => (
          <Route
            key={component.id}
            path={component.pathName.slice(1)}
            element={
              <ApplicationPage
                Component={component.component}
                sideBarComponent={component}
                onSideBarComponentChange={handleSideBarComponentChange}
              />
            }
          />
        ))}
        {PROFILE_ELEMENTS.map((component) => (
          <Route
            key={component.id}
            path={component.pathName.slice(1)}
            element={
              <ApplicationPage
                Component={component.component}
                sideBarComponent={component}
                onSideBarComponentChange={handleSideBarComponentChange}
              />
            }
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
