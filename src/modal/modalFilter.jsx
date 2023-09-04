import React from 'react'

const ModalFilter = () => {
    return (
        <>
            <form className="form-inline my-2 my-lg-0">
                <div
                    className="modal fade"
                    id="exampleModal1"
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">
                                    Filter
                                </h5>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div>
                                    <h5>Colors</h5>
                                    <button className="color mr-3 mt-3" />
                                    <button className="color1 mr-3" />
                                    <button className="color2 mr-3" />
                                    <button className="color3 mr-3" />
                                    <button className="color4 mr-3" />
                                    <button className="color5 mr-3" />
                                </div>
                                <hr />
                                <div className="mt-3">
                                    <h5>Sizes</h5>
                                    <button className="color6 mr-3 mt-3">XS</button>
                                    <button className="color7 mr-3">S</button>
                                    <button className="color7 mr-3">M</button>
                                    <button className="color6 mr-3">L</button>
                                    <button className="color6 mr-3">XL</button>
                                </div>
                                <hr />
                                <div className="mt-3">
                                    <h5>Category</h5>
                                    <button className="color8 mr-3 mt-3">All</button>
                                    <button className="color9 mr-3">Women</button>
                                    <button className="color9 mr-3">Men</button>
                                    <button className="color9 mr-3">Boys</button>
                                    <button className="color9 mr-3">Girls</button>
                                </div>
                                <hr />
                                <div className="mt-3">

                                    <div class="form-group">
                                        <label for="exampleFormControlSelect1"><h5>Brand</h5></label>
                                        <select className="form-control border-0" id="exampleFormControlSelect1">
                                            <option>adidas Originals, Jack & Jones, s.Oliver</option>
                                            <option>adidas Originals, Jack & Jones, s.Oliver</option>
                                            <option>adidas Originals, Jack & Jones, s.Oliver</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            {/* <div class="modal-footer"> */}
                            <div className="d-flex justify-content-center  align-items-center mt-3 mb-3">
                                <button
                                    type="button"
                                    className="btn border rounded-pill mr-3 "
                                    data-dismiss="modal"
                                >
                                    Discard
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-danger rounded-pill ml-3"
                                >
                                    Apply
                                </button>
                            </div>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default ModalFilter