import React from 'react'
import { Link } from 'gatsby'

import tangoMail from '../../images/tango-mail-icon.svg'
import tangoPage from '../../images/tango-page-icon.svg'

import {
    SidebarWrapper,
    SidebarMenu
} from './styles/PageSidebarStyles'

const PageSidebar = ({ children, parentChildren, currentPage, parent }) => {
    const getParentContent = () => 
    //Page with no children, show default text
    children.edges.length === 0 ? (
        <>
            <li className="sidebar-menu-header">
                <img src={tangoMail} alt="tango-mail" />
                <span>Mail List</span>
            </li>
            <p>
                Do you want to get update when we publish new trend posts? <br />
                Just email us with your name, company and email adress{' '}
                <a href="mailto:luckystoned@luckystoned.com">Luckystoned!</a>
            </p>
        </>
    ) : (
        //page with children, show menu
        <>
            <li className="sidebar-menu-header">
                <img src={tangoPage} alt="tango-page" />{' '}
                <span dangerouslySetInnerHTML={{ __html: currentPage.title }}/>
            </li>
            {children.edges.map(child => (
                <li key={child.node.id}>
                    <Link to={child.node.link}>
                        <span dangerouslySetInnerHTML={{ __html: child.node.title }}/>
                    </Link>
                </li>                    
            ))}
        </>
    )
    

    const getChildrenContent = () => (
        <>
            <li className="sidebar-menu-header">
                <img src={tangoPage} alt="tango-page" />{' '}
                <span dangerouslySetInnerHTML={{ __html: parent.title }}/>
            </li>
            {parentChildren.edges.map(child => (
                <li
                    key={child.node.id}
                    className={
                        currentPage.id === child.node.id ? "sidebar-highlighted" : ''
                    }
                >
                    {currentPage.id === child.node.id ? (
                        <span dangerouslySetInnerHTML={{ __html: child.node.title }}/>
                    ) : (
                        <Link to={child.node.link}>
                                <span dangerouslySetInnerHTML={{ __html: child.node.title }}/>
                        </Link>
                    )
                }
                </li>
            ))}
        </>
    );

    return (
        <SidebarWrapper className="col-lg-3">
            <SidebarMenu>
                {currentPage.wordpress_parent === 0
                    ? getParentContent()
                    : getChildrenContent()
                }
            </SidebarMenu>
        </SidebarWrapper>
    )
}

export default PageSidebar;