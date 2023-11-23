/* eslint-disable no-unused-vars */
import styles from "./Body.module.css";
import SearchTemplate from "../SearchTemplate/SearchTemplate";
import Carousel from "react-bootstrap/Carousel";
import dadosVeiculo from '../../data/contents.json';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchField from "../SearchField/SearchField";

function Body() {

    const [filter, setFilter] = useState("All");
    const [search, setSearch] = useState("");
    const [filteredData, setFilteredData] = useState(dadosVeiculo);

    const handleSearch = () => {

        const filtered = dadosVeiculo.filter(item => {
            const byCategory = filter === "All" || item.category === filter;
            const bySearch = item.location.toLowerCase().includes(search.toLowerCase());

            return byCategory && bySearch;
        });
        setFilteredData(filtered);
    };    

    const handleFilterChange = (selectedFilter) => {
        setFilter(selectedFilter);
    };

    const handleSearchChange = (searchQuery) => {
        setSearch(searchQuery);
    }

    useEffect(() => {
        handleSearch();
    }, [filter, search]);

    

    return (
        <main className={styles.body}>
            <SearchTemplate search={search} setSearch={setSearch} handleSearch={handleSearchChange}/>


            <Carousel className={styles.carousel}>
                    <Carousel.Item>
                        <img className={styles.imgCarousel} src="https://images.pexels.com/photos/4512259/pexels-photo-4512259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Imagem do carro" />
                        <Carousel.Caption className={styles.carouselText}>
                        <h3 className={styles.carouselTitle}>Categoria Econômica</h3>
                        <p className={styles.carouselDescricao}>O carro ideal qualquer ocasião, estilo e personalidade</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className={styles.imgCarousel} src="https://images.pexels.com/photos/6649925/pexels-photo-6649925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Imagem do carro" />
                        <Carousel.Caption className={styles.carouselText}>
                        <h3 className={styles.carouselTitle}>Categoria Intermediária</h3>
                        <p className={styles.carouselDescricao}>O carro ideal qualquer ocasião, estilo e personalidade</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className={styles.imgCarousel} src="https://images.pexels.com/photos/261985/pexels-photo-261985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Imagem do carro" />
                        <Carousel.Caption className={styles.carouselText}>
                        <h3 className={styles.carouselTitle}>Categoria Executiva</h3>
                        <p className={styles.carouselDescricao}>O carro ideal qualquer ocasião, estilo e personalidade</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <SearchField filter={filter} setFilter={handleFilterChange} />
            
            <div className={styles.cardCars}>
            
                <div className={styles.cardForTitle}>
                <h2 className={styles.cardTitle}>Recomendações</h2>
                </div>    

                

                {filteredData.map(item => (

                    <section key={item.id} className={styles.sectionCard}>
                        <div className={styles.cardContainer}>
                        <img className={styles.imgCar} src={item.img} />
                        </div>
                        <p className={styles.modelCar}> {item.title} </p>
                        <div className={styles.yearCar}>
                            <span className={styles.span}>Ano 2020/2021</span>
                            <Link to={`/detail/${item.id}`}>
                                <button className={styles.buttonCar}>Ver mais...</button>
                            </Link>
                        </div>
                    </section> 

                ))}

                
            </div>  
        </main>
    )

}

export default Body