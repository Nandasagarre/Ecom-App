import React from 'react'
import { Field, reduxForm } from 'redux-form'

let ContactForm = props => {
    const { handleSubmit } = props
    //console.log('here in prope debug', handleSubmit);
    return (

         <div>
            <section>
                <form className="shadow p-3 mb-5 rounded" onSubmit={handleSubmit} >
                    Add Product
                    <div className="p-2">
                        <div className="my-3">
                            <label htmlFor="ptitle" className="form-label">Title</label>
                            <Field
                                component="input"
                                type="text"
                                className="form-control"
                                id="ptitle"
                                name="ptitle"
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="plink" className="form-label">Image Link</label>
                            <Field component="input" type="text" className="form-control" id="plink" name="plink" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="pdesc" className="form-label">Description</label>
                            <Field component="input" type="text" name="pdesc" className="form-control" id="pdesc" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="pprice" className="form-label">Price</label>
                            <Field
                                component="input" type="text" name="pprice" className="form-control" id="pprice" />
                        </div>



                        <div className="mb-3">
                            <label htmlFor="prating" className="form-label">rating</label>
                            <Field
                                component="input"
                                type="number"
                                min="1"
                                max="5"
                                className="form-control"
                                id="prating"
                                name="prateing"
                            />
                        </div>
                    </div>
                    <button type='submit' onClick={() => { alert('Product Added! Click Go Back to see') }} className="btn btn-light">Add Product</button>
                </form>
            </section>
        </div>
        //<form onSubmit={handleSubmit}>
        //    <div>
        //        <label htmlFor="firstName">First Name</label>
        //        <Field name="firstName" component="Field" type="text" />
        //    </div>
        //    <div>
        //        <label htmlFor="lastName">Last Name</label>
        //        <Field name="lastName" component="Field" type="text" />
        //    </div>
        //    <div>
        //        <label htmlFor="email">Email</label>
        //        <Field name="email" component="Field" type="email" />
        //    </div>
        //    <button type="submit">Submit</button>
        //</form>
    )
}

ContactForm = reduxForm({
    // a unique name for the form
    form: 'newProduct'
})(ContactForm)

export default ContactForm