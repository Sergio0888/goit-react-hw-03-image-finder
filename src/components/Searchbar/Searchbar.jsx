import styles from './searchbar.module.css';
import PropTypes from 'prop-types';


const Searchbar = ({onSubmit}) => {
    
    return (
        <header className={styles.searchbar}>
            <form className={styles.searchForm} onSubmit={onSubmit}>
                <button type="submit" className={styles.searchFormBtn}>
                <span className={styles.searchFormBtnLabel}>Search</span>
                </button>

                <input
                className={styles.searchFormInput}
                name="input"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                />
            </form>
        </header>
    )
}

Searchbar.defaultProps = {
    onSubmit: ()=>{},
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

export default Searchbar;