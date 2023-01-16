import {FiltersContainer} from "./style"

export default function Filter (props) {
    return <FiltersContainer>
        <input
            placeholder="Pesquisar"
            value={props.query}
            onChange={(e) => { props.setQuery(e.target.value) }}
        />
        <input
            placeholder="Preço mínimo"
            type ="number"
            value={props.minPrice}
            onChange={(e) => { props.setMinPrice(e.target.value) }}
        />
         <input
            placeholder="Preço máximo"
            type ="number"
            value={props.maxPrice}
            onChange={(e) => { props.setMaxPrice(e.target.value) }}
        />
        <select
            value={props.sortingParameter}
            onChange={e=> { props.setSortingParameter(e.target.value) }}
        >
        <option value={"nome"}>Nome</option>
        <option value={"preco"}>Valor</option>
        </select>
        <select
            value={props.order}
            onChange={e=> { props.setOrder(e.target.value) }}
        >
        <option value={"asc"}>Crescente</option>
        <option value={"desc"}>Decrescente</option>
        </select>
    </FiltersContainer>
}