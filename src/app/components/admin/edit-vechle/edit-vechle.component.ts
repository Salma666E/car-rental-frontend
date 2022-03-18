import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoryData } from 'src/app/models/category';
import { VehicleData } from 'src/app/models/vehicle';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-edit-vechle',
  templateUrl: './edit-vechle.component.html',
  styleUrls: ['./edit-vechle.component.scss']
})
export class EditVechleComponent implements OnInit, AfterViewInit {
  newVehicle: VehicleData = {};
  id:number=0;
  @ViewChild('car_model') car_model: ElementRef = new ElementRef('input');
  @ViewChild('car_brand') car_brand: ElementRef = new ElementRef('input');
  @ViewChild('plate_number') plate_number: ElementRef = new ElementRef('input');
  @ViewChild('booking_num') booking_num: ElementRef = new ElementRef('input');
  @ViewChild('car_images') car_image: ElementRef = new ElementRef('input');
  @ViewChild('available_num') available_num: ElementRef = new ElementRef('input');
  @ViewChild('broken_down_num') broken_down_num: ElementRef = new ElementRef('input');
  @ViewChild('category') category: ElementRef = new ElementRef('input');
  @ViewChild('marked') marked: ElementRef = new ElementRef('input');
  @ViewChild('date_first_circulation') date_first_circulation: ElementRef = new ElementRef('input');
  @ViewChild('version') version: ElementRef = new ElementRef('input');
  @ViewChild('identify_num') identify_num: ElementRef = new ElementRef('input');
  @ViewChild('description') description: ElementRef = new ElementRef('input');
  @ViewChild('capacity') capacity: ElementRef = new ElementRef('input');
  @ViewChild('price') price: ElementRef = new ElementRef('input');
  @ViewChild('gps_price') gps_price: ElementRef = new ElementRef('input');
  @ViewChild('airbag_price') airbag_price: ElementRef = new ElementRef('input');
  @ViewChild('air_conditioning_price') air_conditioning_price: ElementRef = new ElementRef('input');
  @ViewChild('child_seat_price') child_seat_price: ElementRef = new ElementRef('input');
  @ViewChild('cd_player_price') cd_player_price: ElementRef = new ElementRef('input');
  @ViewChild('baby_seat_price') baby_seat_price: ElementRef = new ElementRef('input');
  @ViewChild('ski_rack') ski_rack: ElementRef = new ElementRef('input');
  @ViewChild('rate') rate: ElementRef = new ElementRef('input');
  constructor(private _vehicle: VehicleService, public router: Router, private route: ActivatedRoute) { }
  private routeSub: Subscription = new Subscription;
  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      this.id = params['id'];
    });
  }
  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
  categoryList:CategoryData[]=[];
  ngAfterViewInit(): void {
    // getCategoryList
    this._vehicle.geCategoryList().subscribe(
      (resp) => {
        this.categoryList = resp.data;
        console.log(this.categoryList);
      },
      function (err) {
        console.log(err);
      }
    );
    // getAgencyList
    this._vehicle.searchByIdVehicle(this.id).subscribe(
      (resp) => {
        console.log(resp.res);
        this.car_model.nativeElement.value=resp.res[0].car_model;
        this.car_brand.nativeElement.value=resp.res[0].car_brand;
        this.plate_number.nativeElement.value=resp.res[0].plate_number;
        this.booking_num.nativeElement.value=resp.res[0].booking_num;
        this.car_image.nativeElement.value=resp.res[0].car_image;
        this.available_num.nativeElement.value=resp.res[0].available_num;
        this.broken_down_num.nativeElement.value=resp.res[0].broken_down_num;
        this.category.nativeElement.value=resp.res[0].category;
        this.marked.nativeElement.value=resp.res[0].marked;
        this.date_first_circulation.nativeElement.value=resp.res[0].date_first_circulation;
        this.version.nativeElement.value=resp.res[0].version;
        this.identify_num.nativeElement.value=resp.res[0].identify_num;
        this.description.nativeElement.value=resp.res[0].description;
        this.capacity.nativeElement.value=resp.res[0].capacity;
        this.price.nativeElement.value=resp.res[0].price;
        this.gps_price.nativeElement.value=resp.res[0].gps_price;
        this.airbag_price.nativeElement.value=resp.res[0].airbag_price;
        this.air_conditioning_price.nativeElement.value=resp.res[0].air_conditioning_price;
        this.child_seat_price.nativeElement.value=resp.res[0].child_seat_price;
        this.cd_player_price.nativeElement.value=resp.res[0].cd_player_price;
        this.baby_seat_price.nativeElement.value=resp.res[0].baby_seat_price;
        this.ski_rack.nativeElement.value=resp.res[0].ski_rack;
        this.rate.nativeElement.value=resp.res[0].rate;
      },
      function (err) {
        console.log(err);
        alert("perhaps! Agency DB is empty.");
      }
    )
    // End getAgencyList
  }
  updateVehicle() {
    //get catID
    console.log(this.category.nativeElement.value);//cat2
    this._vehicle.searchByNameCategory(this.category.nativeElement.value).subscribe(
      (resp) => {
        console.log(resp);
        this.newVehicle.category_id = resp.res[0].id
        console.log(resp.res[0].id);
        console.log(this.newVehicle);
    this._vehicle.updateVehicle(this.newVehicle,this.id).subscribe(
      (res) => {
        console.log(res);
        alert("successfully updated");
        this.router.navigate([`Admain/vehicle`]);
      },
      function (err) {
        console.log(err);
      }
    );
        
      },
      function (err) {
        console.log(err);
      }
    );

    
  }
}
