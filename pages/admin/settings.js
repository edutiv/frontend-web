import React from "react";

// components

import CardSettings from "../../components/admin/Cards/CardSettings.js";
import CardProfile from "../../components/admin/Cards/CardProfile.js";

// layout for page

import Admin from "../../layouts/Admin.js";

export default function Settings() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4 lg:w-8/12">
          <CardSettings />
        </div>
        <div className="w-full px-4 lg:w-4/12">
          <CardProfile />
        </div>
      </div>
    </>
  );
}

Settings.layout = Admin;
