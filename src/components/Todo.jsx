import React, {useState} from 'react';

const Todo = () => {

	const [inputTitle, setinputTitle] = useState("");
	const [inputDesc, setinputDesc]   = useState("");
	const [isEditing, setEditing]     = useState(false);

	const [items, setitems] = useState([
	    {
	        id: "001",
	        name: "Default Task",
	        desc: "Default Description",
	        completed: false,

	    },
	]);

	const isAddMode = '';

	const handleInputTitle = (e) => {

	    setinputTitle(e.target.value);
	};

	const handleInputdesc = (e) => {

	    setinputDesc(e.target.value);

	};


	const handleClear = (e) => {

		e.preventDefault();
		setinputTitle('');
		setinputDesc('');

	}

	const handleSubmit = (e) => {
		console.log(items)
		e.preventDefault();

		if (!inputTitle || !inputDesc) {

     		alert("fill data");
   		}else{

   			if(isEditing){

   				const editDatas = items.map(data => {

		      		if (data.id === isEditing) {
		        		
		        		data.id =   isEditing;
		        		data.name = inputTitle;
        				data.desc = inputDesc;

		      		}
		      		return data;
    			})

    			setitems(editDatas);

   			}else{

   				const allInputData = {
       				id: new Date().getTime().toString(),
       				name: inputTitle,
        			desc: inputDesc,
   				}
   				setitems([allInputData, ...items]);
   			}

   			setEditing(false);
   			setinputTitle('');
			setinputDesc('');
   		}
	}


	const handleDelete = (taskId) => {

		let newItems = items.filter(c => c.id !== taskId);
		setitems(newItems);

		setEditing(false);
   		setinputTitle('');
		setinputDesc('');
	}

	const handleEdit = (taskId) => {

		{items.map((elem) => {

			if(elem.id === taskId){

				setinputTitle(elem.name);
				setinputDesc(elem.desc);
				setEditing(taskId);
			}

		})};
	}

	const handleCompleteTask = (taskId) => {

		let itemDatas = items.map(data => {

	        if (data.id === taskId) {

	        	data.completed = !data.completed;
	      	}

      		return data;
    	})

   		setitems(itemDatas);
	}

 	return (


   		<div className="container">

			<div className="container border rounded d-flex justify-content-center shadow p-3 mb-5 bg-white rounded">

	            <div className="row">

	            	<div className="text-center">

	            		<h2></h2>
	            	</div>

		            <form className="col-12 p-2"  onSubmit={handleSubmit} >

		               <h3> { (isEditing ? 'Edit Task' : 'New Task'  )}</h3>
		               	<label htmlFor="title" className="my-2">

		                	Enter Title

		               </label>

		               	<input
		                	type="text"
		                	name="title"
		                	id="title"
		                	placeholder="title"
		                	className="w-100 my-1 p-2"
		                	onChange={handleInputTitle}
                 			value={inputTitle}
		                />

		                <label className="my-2" htmlFor="description">
		                 	Enter
		               	</label>

		                <input
		                	type="text"
		                	name="description"
		                	id="description"
		                	placeholder="Description"
		                	className="w-100 my-1 p-2"
		                	onChange={handleInputdesc}
                			value={inputDesc}
		               />

		                <button className="btn btn-primary my-2">{ (isEditing ? 'Update' : 'Save'  )}</button>
		                <button 
		                	className= "btn btn-primary my-2"
		                	onClick  = {handleClear}
		                >
		                	Clear
		                </button>
		            </form>
	            </div>
	        </div>

	        <div className="col-12 text-end">

		        <button className="btn btn-primary " >
		            Add New Task
		        </button>
         	</div>

         	{items.map((elem, index) => {

         		return (
           
            		<div
	               		className="row border rounded shadow p-3 mb-3 bg-white rounded  p-2"
	               		key={elem.id}
	             	>
		               	<div className="col-12 d-flex justify-content-between align-items-center">
		                	<div>
		                		
		                		<h4>
			                		<input
			                			className="form-check-label"
	                					type="checkbox"
	                					onChange={() => handleCompleteTask(elem.id)}
	                					defaultChecked={elem.completed}
	              					/>
			                		{elem.name}
			                	</h4>
		                   		<p>{elem.desc}</p>
		                 	</div>
		                </div>
		                <div className="col-12 text-end">

					        <button 
					        	className="btn btn-primary btn-sm m-2" 
					        	onClick={() => handleEdit(elem.id)}
					        >
					           Edit

					        </button>
					        <button 
					        	className="btn btn-danger btn-sm m-2" 
					        	onClick={() => handleDelete(elem.id)}
					        >
					           Delete
					        </button>
         				</div>
	             	</div>
	            );
           
        	})}

	    </div>
 	)
}
 
export default Todo