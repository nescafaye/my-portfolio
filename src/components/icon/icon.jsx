import React from 'react'
import { Icon as Iconify} from "@iconify/react";

const Icon = ({ name, size }) => {

    const iconList = {
        Linkedin: "uit:linkedin-alt",
        Github: "akar-icons:github-outline-fill",
        Behance: "simple-line-icons:social-behance",
        Dribbble: "ph:dribbble-logo-light"
    };

    const iconName = iconList[name] || "default-iconify-name";

    return (
        <div>
            <Iconify icon={iconName} width={size} className="mx-auto" />
        </div>
    )
}

export default Icon