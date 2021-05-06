import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import SearchSharpIcon from  '@material-ui/icons/SearchSharp';
function Header()
{
    return(
       <header className="header">
       <div className="header__left">
            <MenuSharpIcon/>
            <h2>Icon</h2>
        </div>
        <div className="header__input">
            <input placeholder="search" type="text"/>
            <SearchSharpIcon/>
            
        </div>
        <div>
        <h2 className="header__avatar">Avatar</h2>
        </div>
    
        
       </header>
    )
}

export default Header