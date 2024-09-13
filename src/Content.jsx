import Gallery from "./gallery/gallery";
import Posts from "./posts/posts";
import style from "./style.module.css";
import Todos from "./todos/Todos";
import Users from "./users/Users";

const Content =() => {
    return(
        <div className={style.content_section}>
            <i className={`${style.menu_button} fas fa-bars text-dark m-2 pointer`}></i>
            <Users/>
            <Posts/>
            <Gallery/>
            <Todos />
        </div>
    )

}

export default Content;