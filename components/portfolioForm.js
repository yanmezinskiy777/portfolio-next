import React, { useState, useEffect } from 'react'
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";

const PortfolioForm = ({ onSubmit, initialData = {} }) => {
  const { register, handleSubmit, setValue } = useForm({ defaultValues: initialData });

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    register({ name: 'startDate' });
    register({ name: 'endDate' });
  }, [register])

  useEffect(() => {
    const { startDate, endDate } = initialData;
    if (initialData.startDate){
      setStartDate(new Date(startDate) || null);
    }
    if(initialData.endDate){
      setEndDate(new Date(endDate) || null)
    }
  }, [initialData])

  // const startDateHandler = (date) => {
  //   setStartDate(date);
  //   setValue('startDate', date);
  // }

  // const endDateHandler = (date) => {
  //   setEndDate(date);
  //   setValue("endDate", date);
  // }

  const inputDateHandler = (typeDate, setDate) => (date) => {
    setValue(typeDate, date);
    setDate(date);
  }

    return (
  <form onSubmit={handleSubmit(onSubmit)}>
    <div className="form-group">
      <label htmlFor="title">Title</label>
      <input
      ref={register}
        name="title"
        type="text"
        className="form-control"
        id="title"/>
    </div>

    <div className="form-group">
      <label htmlFor="city">Company</label>
      <input
      ref={register}
        name="company"
        type="text"
        className="form-control"
        id="company"/>
    </div>

    <div className="form-group">
      <label htmlFor="city">Company Website</label>
      <input
      ref={register}
        name="companyWebsite"
        type="text"
        className="form-control"
        id="companyWebsite"/>
    </div>

    <div className="form-group">
      <label htmlFor="street">Location</label>
      <input
      ref={register}
        name="location"
        type="text"
        className="form-control"
        id="location"/>
    </div>

    <div className="form-group">
      <label htmlFor="street">Job Title</label>
      <input
      ref={register}
        name="jobTitle"
        type="text"
        className="form-control"
        id="jobTitle"/>
    </div>

    <div className="form-group">
      <label htmlFor="description">Description</label>
      <textarea
      ref={register}
        name="description"
        rows="5"
        type="text"
        className="form-control"
        id="description">
      </textarea>
    </div>

    <div className="form-group">
      <label htmlFor="startDate">Start Date</label>
      <div>
        <DatePicker selected={startDate} onChange={inputDateHandler('startDate', setStartDate)} />
      </div>
    </div>

    <div className="form-group">
      <label htmlFor="endDate">End Date</label>
      <div>
      <DatePicker disabled={!endDate} selected={endDate} onChange={inputDateHandler('endDate', setEndDate)} />
      </div>
    </div>
    <div className="form-group">
        {endDate && <button type="button" onClick={() => inputDateHandler('endDate', setEndDate)(null)} className="btn btn-danger">No End Date</button>}
        {!endDate && <button type="button" onClick={() => inputDateHandler('endDate', setEndDate)(new Date(new Date().setHours(0,0,0,0)))} className="btn btn-success">Set End Date</button>}
    </div>
  <button
    type="submit"
    className="btn btn-primary">Create
  </button>
</form>
    )
}

export default PortfolioForm
