import axios from 'react-axios'
import './Styles.css'
import React,{Component} from 'react';

class Upload extends Component {

state = {

	// Initially, no file is selected
	selectedFile: null
	};
	
	// On file select (from the pop up)
	onFileChange = event => {
	
	// Update the state
	this.setState({ selectedFile: event.target.files[0] });
	
	};
	
	// On file upload (click the upload button)
	onFileUpload = () => {
	
	// Create an object of formData
	const formData = new FormData();
	
	// Update the formData object
	formData.append(
		"myFile",
		this.state.selectedFile,
		this.state.selectedFile.name
	);
	
	// Details of the uploaded file
	console.log(this.state.selectedFile);
	
	// Request made to the backend api
	// Send formData object
	axios.post("api/uploadfile", formData);
	};
	
	// File content to be displayed after
	// file upload is complete
	fileData = () => {
	
	if (this.state.selectedFile) {
		
		return (
		<div>
			<h2>File Details:</h2>
			
<p>File Name: {this.state.selectedFile.name}</p>

			
<p>File Type: {this.state.selectedFile.type}</p>

			
<p>
			Last Modified:{" "}
			{this.state.selectedFile.lastModifiedDate.toDateString()}
			</p>

		</div>
		);
	}
	};
	
	render() {
	
	return (
		<div>
		<div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
  <label for="floatingInput">Email address</label>
</div>
<div class="form-floating">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
  <label for="floatingPassword">Password</label>
</div>
			<div>
				<input type="file" onChange={this.onFileChange} />
				<button onClick={this.onFileUpload}>
				Upload!
				</button>
			</div>
		{this.fileData()}
		<br />
		<br />

  <div class="segmented-control">
    <input type="radio" name="animal" id="bear" value="bear" />
    <label for="bear">Bear</label>
    <input type="radio" name="animal" id="lion" value="lion" />
    <label for="lion">Lion</label>
    <input type="radio" name="animal" id="lynx" value="lynx" />
    <label for="lynx">Lynx</label>
  </div>


<div class="normal-container">
	<div class="smile-rating-container">
		<div class="smile-rating-toggle-container">
			<form class="submit-rating">
				<input id="meh"  name="satisfaction" type="radio" /> 
				<input id="fun" name="satisfaction" type="radio" /> 
				<label for="meh" class="rating-label rating-label-meh">Bad</label>
				<div class="smile-rating-toggle"></div>
				
				<div class="rating-eye rating-eye-left"></div>
				<div class="rating-eye rating-eye-right"></div>
				
				<div class="mouth rating-eye-bad-mouth"></div>
				
				<div class="toggle-rating-pill"></div>
				<label for="fun" class="rating-label rating-label-fun">Fun</label>
			</form>
		</div>
	</div>
</div>


		</div>
	);
	}
}

export default Upload;
