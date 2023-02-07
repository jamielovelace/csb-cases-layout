import React, { useState } from 'react'
import { Resizable } from 're-resizable';

import Navbar from "./Navbar";
import style from "./Case.module.css";
import NotesSidebar from "./NotesSidebar";
import CaseSidebar from "./CaseSidebar";

export default function App() {
  const [showSidebar, setShowSidebar] = useState(true)
  const [sidebarSize, setSidebarSize] = useState(300)

  const ResizeHandle = React.forwardRef((props, ref) => {
    const {handleAxis, ...restProps} = props;
    return <div ref={ref} className={style.handle} {...restProps} />;
  });
  
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
                onResizeStop={(e, direction, ref, d) => {
                  setSidebarSize(sidebarSize + d.width)
                }}
              >
                <NotesSidebar close={setShowSidebar}/>
              </Resizable>
            </div>
          )}
        <div className={style.body}>
          <CaseSidebar className={style.caseSidebar} />
          <div className={style.case} />
        </div>
      </div>
    </>
  );
}
