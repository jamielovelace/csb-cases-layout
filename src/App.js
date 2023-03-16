import React, { useState } from "react";
import { Resizable } from "re-resizable";

import Navbar from "./Navbar";
import style from "./Case.module.css";
import NotesSidebar from "./NotesSidebar";
import CaseSidebar from "./CaseSidebar";

export default function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [sidebarSize, setSidebarSize] = useState(300);
  const [sidebarIsResizing, setSidebarIsResizing] = useState(false);
  const [caseSidebarSize, setCaseSidebarSize] = useState(250);
  const [caseSidebarIsResizing, setCaseSidebarIsResizing] = useState(false);

  return (
    <>
      <Navbar />
      <div className={style.container}>
        <div className={style.header}>
          <button type="button" onClick={() => setShowSidebar(!showSidebar)}>
            Notes
          </button>
        </div>
        {showSidebar && (
          <div className={style.sidebar}>
            <Resizable
              size={{ width: sidebarSize, height: "100%" }}
              minWidth={320}
              maxWidth={500}
              enable={{
                top: false,
                right: false,
                bottom: false,
                left: true,
                topRight: false,
                bottomRight: false,
                bottomLeft: false,
                topLeft: false,
              }}
              boundsByDirection={true}
              handleClasses={{
                left: `${style.handle} ${style.handleLeft} ${
                  sidebarIsResizing && style.isResizing
                }`,
              }}
              onResizeStart={() => {
                setSidebarIsResizing(true);
              }}
              onResizeStop={(e, direction, ref, d) => {
                setSidebarSize(sidebarSize + d.width);
                setSidebarIsResizing(false);
              }}
            >
              <NotesSidebar close={setShowSidebar} />
            </Resizable>
          </div>
        )}
        <div className={style.body}>
          <CaseSidebar className={style.caseSidebar} />
          <div className={style.case}>
            <div className={style.cards}>
              <h2 style={{ margin: "0 0 16px" }}> Something here</h2>
              <div class={style.card}>
                <span>blah blah</span>
                <span>Date modified</span>
                <span>Status</span>
              </div>
              <div class={style.card}>
                <span>blah blah</span>
                <span>Date modified</span>
                <span>Status</span>
              </div>
              <div class={style.card}>
                <span>blah blah</span>
                <span>Date modified</span>
                <span>Status</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
