import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductAction } from '../../../config/redux/action/productAction'
import DataTable from 'react-data-table-component'
import ModalUpdate from '../../../modal/modalUpdateProduct'
import ModalDelete from '../../../modal/modalDeleteProduct'

const ListProduct = () => {
    const dispatch = useDispatch()
    const { product } = useSelector((state) => state.product)
    useEffect(() => {
        dispatch(getProductAction());
        // handleFilter();
    },[dispatch])
    const columns = [
        {
            name: 'Id',
            selector: row => row.id_product,
            sortable: true
        },
        {
            name: 'Name product',
            selector: row => row.name_product,
            sortable: true
        },
        {
            name: 'Stock',
            selector: row => row.stock_product,
            sortable: true
        },
        {
            name: 'Price',
            selector: row => row.price_product,
            sortable: true
        },
        {
            name: 'Photo',
            selector: row => <img src={row.image_product} alt="Product" style={{ width: 100 }} />,
            sortable: true
        },
        {
            name: "Update",
            cell: (row) => (
              <ModalUpdate
                id_product={row.id_product}
                name_product={row.name_product}
                id_category={row.id_category}
                id_seller={row.id_seller}
                price_product={row.price_product}
                stock_product={row.stock_product}
                description_product={row.description_product}
                image_product={row.image_product}
                key={row.id_product}
              />
            )
          },
        {
            name: "Delete",
            cell: (row) => (
              <ModalDelete
                id_product={row.id_product}
                key={row.id_product}
              />
            )
          },
    ]

    const [search,setSearch] = useState(product);
    const handleFilter = (e) =>{
        const newData = product.filter(row => {
            return row.name_product.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setSearch(newData);
    }
    return (
        <>
            <div
                className="col-md-8 col-12"
                style={{ backgroundColor: "#F5F5F5", marginLeft: "right" }}
            >
                <div
                    className="col-md-12 border container-fluid"
                    style={{
                        marginTop: 124,
                        backgroundColor: "#fff",
                        borderRadius: 4,
                        border: "1px solid #9B9B9B",
                    }}
                >
                    <div className="row">
                        <div className=" col-md-12 mt-3">
                            <div className=" col-md-12 border-bottom">
                                <div className="row">
                                    <div className="col-md-12 p-0">
                                        <h4 className="font-weight-bold pt-2">My product</h4>
                                    </div>
                                    <div class="col-md-2 col-4 text-left p-0">
                                        <p class="line-text text-danger font-weight-bold">
                                            All items
                                        </p>
                                    </div>
                                    <div class="col-md-2 col-4 text-left p-0">
                                        <p>Sold Out</p>
                                    </div>
                                    <div class="col-md-2 col-4 text-left p-0">
                                        <p>Archived</p>
                                    </div>
                                </div>
                                {/* <hr /> */}
                                <div className='text-end'>
                                    <input type="text" placeholder='Search' style={{borderRadius:"20px",border:"1px silver solid"}} onChange={handleFilter} />
                                </div>
                                <DataTable
                                    columns={columns}
                                    data={search}
                                    fixedHeader
                                    pagination
                                ></DataTable>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListProduct