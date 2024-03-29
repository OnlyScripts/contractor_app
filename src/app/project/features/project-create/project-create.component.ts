import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Project } from '../../utils/models/project.model';
import { UnSubscriber } from 'src/app/shared/utils/services/unsubscriber.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { CreateProjectAction } from '../../utils/store/project-store.action';
import { projectCategories } from 'src/app/shared/utils/models/project-categories';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.scss']
})
export class ProjectCreateComponent extends UnSubscriber implements OnInit {
  projectData!: Project;
  form!: FormGroup;
  categories = projectCategories;

  constructor(
    public store: Store<AppState>
  ){
    super();
  }
  
  ngOnInit(): void {
    this.initForm();

    this.newSubscription = this.form.valueChanges.subscribe(data => {
      this.projectData = data;
    });
  }

  initForm() {
    this.form = new FormGroup({
      title: new FormControl(null, [Validators.minLength(3), Validators.required]),
      category: new FormControl(null, [Validators.required]),
      tags: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.maxLength(100)]),
    });
  }

  isValid(name: string) {
    const { invalid, touched } = this.form.controls[name];
    return invalid && touched;
  }

  createProject() {    
    this.store.dispatch(new CreateProjectAction(this.projectData));
  }
}
