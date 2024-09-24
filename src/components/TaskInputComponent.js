import React ,{useState}from 'react'

const TaskInputComponent = ({addList}) => {
   const [form,setForm]=useState({})
    const handleOnChange=(event)=>{
        const {name,value}=event.target
        setForm({
            ...form,
            [name]:value
        })
    }
    const handleOnSubmit=(event)=>{
        event.preventDefault();
        addList(form)
    }

  return (

    <>
    <div className="taskinput-container">
    <div className="container bg-transparent border border-dark-subtle shadow rounded-pill">
                <form onSubmit={handleOnSubmit}> 
                    <div className="row p-5 g-2">
                        <div className="col-md-7">

                            <input type="text" className="form-control" placeholder="Task" name="task" id="task"
                                aria-label="First name" onChange={handleOnChange}/>
                        </div>
                        <div className="col-md-2">
                            <input type="number" className="form-control" placeholder="Hour" aria-label="Last name" name="hour"
                                id="hour" onChange={handleOnChange}/>
                        </div>
                        <div className="col-md-3">
                            <button type="submit" className="btn btn-primary " >Add Task</button>
                        </div>
                    </div>
                </form>
            </div>
    </div>
    </>
  )
}

export default TaskInputComponent
