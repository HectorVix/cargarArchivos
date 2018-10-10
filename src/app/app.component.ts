import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Table, datos } from './Tabla';
import { FileUploader, FileSelectDirective } from 'ng2-file-upload';
const URL = 'url to API';
import { Observable } from 'rxjs/Observable';
import { MatDialogRef } from '@angular/material';
import { forkJoin } from 'rxjs/observable/forkJoin';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('file') file;
  public files: Set<File> = new Set();

  public uploader: FileUploader = new FileUploader({ itemAlias: 'myFile' });
  rForm: FormGroup;
  post: any;                     // A property for our submitted form
  description: string = '';
  name: string = '';
  titleAlert: string = 'This field is required';
  characters: Table[];
  data: datos;

  progress;
  canBeClosed = true;
  primaryButtonText = 'Upload';
  showCancelButton = true;
  uploading = false;
  uploadSuccessful = false;

  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Name'
      },
      age: {
        title: 'Age'
      }
    }
  };

  constructor(private fb: FormBuilder) {
    this.rForm = fb.group({
      'name': [null, Validators.required],
      'description': [null, Validators.required],
      'validate': ''
    });
    this.data = new datos();

    this.data.id = 1;
    this.data.age = 2;
    this.data.name = 'hola';
    console.log(this.data);

    // this.characters.push(this.data)


  }
  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('ImageUpload:uploaded:', item, status, response);
      alert('File uploaded successfully');
    };
  }

  addFiles() {
    this.file.nativeElement.click();
  }
  onFilesAdded() {
    const files: { [key: string]: File } = this.file.nativeElement.files;
    for (let key in files) {
      if (!isNaN(parseInt(key))) {
        this.files.add(files[key]);
      }
    }
  }
  addPost(post) {
    this.description = post.description;
    this.name = post.name;
  }
}
