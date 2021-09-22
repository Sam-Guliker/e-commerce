
export default function HMenu({isActiveNavigation, setIsActiveNavigation}) {
    const menuContainer = isActiveNavigation ? `menu-container active-menu`:` menu-container`;

    return (
        <div 
            onClick={() => setIsActiveNavigation(!isActiveNavigation)}
            className={menuContainer}
        >
            <div className="stripe stripe-1"></div>
            <div className="stripe stripe-2"></div>
            <div className="stripe stripe-3"></div>
        </div>
    )
}