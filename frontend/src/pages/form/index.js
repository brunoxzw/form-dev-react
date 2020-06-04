import React, { useState, useEffect, createElement } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import "./style.css";
import { FaPlusSquare, FaSearchPlus, FaAngleLeft , FaAngleRight , FaAngleDoubleLeft , FaAngleDoubleRight } from "react-icons/fa";
import Pagination from "react-js-pagination";
import dateFormat from 'dateformat'

export default function Form() {
  const [form, setform] = useState([]);
  const [count, setCount] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [start , setStart] = useState(0);
  let itensPerPage = 10;

  const pag = (e) => {
    setCurrentPage(e)
    setStart( ( e - 1 ) * itensPerPage)
  }


  useEffect(() => {

    api.get('forms/count')
    .then((res) => setCount(res.data))

    api
      .get(
        `forms?_start=${start}&_limit=${itensPerPage}&_sort=id%3ADESC`
      )
      .then((res) => {
        setform(res.data);
      });


  }, [currentPage]);

  return (
    <>
      <div>
        <Link to="/Add" className="add">
          <FaPlusSquare className="i" />
          Adicionar Devolução
        </Link>
      </div>

      <div className="f-container">
        <table>
          <tr>
            <th>#</th>
            <th>Loja</th>
            <th>Documento</th>
            <th>Valor</th>
            <th>Vendedor</th>
            <th>Data</th>
            <th>Abrir</th>
          </tr>
          {form.map((iten) => (
            <tr key={iten.id}>
              <td>{iten.id}</td>
              <td>{iten.loja}</td>
              <td>{iten.nf}</td>
              <td>{iten.valor}</td>
              <td>{iten.vendedor}</td>
              <td>{dateFormat(iten.created_at, "dd/mm/yyyy")}</td>
              <td>
                <Link to={`/Iten/${iten.id}`}>
                  <button style={{ width: 35 }}>
                    <FaSearchPlus />
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </table>

        <div>
          <Pagination
            activePage={currentPage}
            itemsCountPerPage={itensPerPage}
            totalItemsCount={count}
            pageRangeDisplayed={5}
            onChange={pag}
            prevPageText={<FaAngleLeft/>}
            nextPageText={<FaAngleRight/>}
            firstPageText={<FaAngleDoubleLeft/>}
            lastPageText={<FaAngleDoubleRight/>}
          />
        </div>
      </div>
    </>
  );
}
