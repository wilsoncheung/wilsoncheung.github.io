import React from 'react'

export const Layout = (props) => (
    <div className="container-fluid">    {/* mt-4 style={{ minHeight: `calc(100vh - 170px)`}} (100 view height - HEADER + FOOTER px) */}
        {props.children}
    </div>
)