import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { PostService } from '../post.service';
import { ThrowStmt } from '@angular/compiler';
import { Observable} from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage'; 
import { Router } from '@angular/router';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.css']
})
export class PostDashboardComponent implements OnInit {
  title:string;
  image:string=null;
  content:string;
  num: number;

  buttonText:string ="Create Post";

  uploadPercent:Observable<number|void>;
  downloadUrl: Observable<string>;

  constructor(private auth:AuthService,
              private postService: PostService,
              private storage : AngularFireStorage,
              private router : Router
    ) { }

  ngOnInit() {
  }
  createPost(){
    const data = {
      author: this.auth.authState.displayName || this.auth.authState.email,
      authorId: this.auth.currentUserId,
      content:this.content,
      image:this.image,
      published:new Date(),
      title:this.title
    };
    this.postService.create(data); 
    this.title = '';
    this.content='';
    this.buttonText = "Post Created!";
    setTimeout(()=>this.buttonText ="Create Post",3000)
    this.router.navigate(['/blog']);
  }

  uploadImage(event){
    const file = event.target.files[0]
    const path = `posts/${file.name}`
    if(file.type.split('/')[0] !== 'image')
    {
      return alert("please select only image files")
    }
    else{
      const task = this.storage.upload(path,file);

      const ref = this.storage.ref(path);
      this.downloadUrl = ref.getDownloadURL();



      this.uploadPercent = task.percentageChanges();
      this.uploadPercent.toPromise().then(percentage =>{
                              
        this.downloadUrl = ref.getDownloadURL();
        this.downloadUrl.subscribe(url=> {
        this.image =url});
      });
      // this.uploadPercent.subscribe(percentage =>
      //                       {
                              
      //                         this.downloadUrl = ref.getDownloadURL();
      //                         this.downloadUrl.subscribe(url=> {
      //                         this.image =url});
      //                       }
      //                     );

    }
  }

}
