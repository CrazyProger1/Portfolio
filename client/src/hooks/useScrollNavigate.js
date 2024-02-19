const useScrollNavigate = () => {

    return (id) => {
        const element = document.getElementById(id);

        if (element) {
            window.scrollTo({
                top: element.offsetTop,
                behavior: 'smooth',
            });
        }
    }
}

export default useScrollNavigate;