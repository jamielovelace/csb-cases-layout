import React, { useState } from 'react'
import { Resizable } from 're-resizable';

import Navbar from "./Navbar";
import style from "./Case.module.css";
import NotesSidebar from "./NotesSidebar";
import CaseSidebar from "./CaseSidebar";

export default function App() {
  const [showSidebar, setShowSidebar] = useState(false)
  const [sidebarSize, setSidebarSize] = useState(300)
  const [sidebarIsResizing, setSidebarIsResizing] = useState(false)
  const [caseSidebarSize, setCaseSidebarSize] = useState(250)
  const [caseSidebarIsResizing, setCaseSidebarIsResizing] = useState(false)
  
  return (
    <>
      <Navbar />
      <div className={style.container}>
        <div className={style.header}>
          <button type="button" onClick={()=> setShowSidebar(!showSidebar)}>Notes</button>
        </div>
          {showSidebar && (
            <div
              className={style.sidebar}
            >
              <Resizable
                size={{ width: sidebarSize, height: '100%'}} 
                minWidth={200} 
                maxWidth={500} 
                enable={{ top:false, right:false, bottom:false, left:true, topRight:false, bottomRight:false, bottomLeft:false, topLeft:false }}
                boundsByDirection={true}
                handleClasses={{
                  left: `${style.handle} ${style.handleLeft} ${sidebarIsResizing && style.isResizing}`
                }}
                onResizeStart={() => {
                  setSidebarIsResizing(true)
                }}
                onResizeStop={(e, direction, ref, d) => {
                  setSidebarSize(sidebarSize + d.width)
                  setSidebarIsResizing(false)
                }}
              >
                <NotesSidebar close={setShowSidebar}/>
              </Resizable>
            </div>
          )}
        <div className={style.body}>
          <Resizable
            size={{ width: caseSidebarSize, height: '100%'}} 
            minWidth={200}
            maxWidth={400}
            enable={{ top:false, right:true, bottom:false, left:false, topRight:false, bottomRight:false, bottomLeft:false, topLeft:false }}
            boundsByDirection={true}
            handleClasses={{
              right: `${style.handle} ${style.handleRight} ${caseSidebarIsResizing && style.isResizing}`
            }}
            onResizeStop={(e, direction, ref, d) => {
              setCaseSidebarSize(caseSidebarSize + d.width)
              setCaseSidebarIsResizing(false)
            }}
            onResizeStart={() => {
              setCaseSidebarIsResizing(true)
            }}
          >
            <CaseSidebar className={style.caseSidebar} />
          </Resizable>
          <div className={style.case} />
        </div>
      </div>
    </>
  );
}
