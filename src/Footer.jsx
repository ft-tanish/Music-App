import React from 'react'
import CenterMenu from './components/CenterMenu'
import { Facebook, Twitter, YouTube, LinkedIn } from "@material-ui/icons";

const Footer = () => {
  return (
    <div className="footer">
        <CenterMenu/>
        {/* social icons */}
        <div className="flex w-[100%] justify-center mt-14">
            <div className="facebook">
                <Facebook/>
            </div>
            <div className="twitter">
                <Twitter/>
            </div>
            <div className="youtube">
                <YouTube/>
            </div>
            <div className="linkedin">
                <LinkedIn/>
            </div>
        </div>
    </div>
  )
}

export default Footer