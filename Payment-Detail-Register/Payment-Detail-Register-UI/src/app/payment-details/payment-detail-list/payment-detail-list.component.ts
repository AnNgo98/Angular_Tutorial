import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from '../shared/payment-detail.service';
import { PaymentDetail } from '../shared/payment-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-detail-list',
  templateUrl: './payment-detail-list.component.html',
  styleUrls: ['./payment-detail-list.component.sass']
})
export class PaymentDetailListComponent implements OnInit {

  // call class service to use function
  constructor(private service:PaymentDetailService,
    private toastr:ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }
// sao chép những giá trị liệt kê được và và các thuộc tính của bản thân nó đến đối tượng đích
  populateForm(pd:PaymentDetail){
    this.service.formData = Object.assign({},pd);
  }
  onDelete(PMId){
    if(confirm("Are you sure ?"))
    {
      this.service.deletePaymentDetail(PMId)
      .subscribe(res=>{
        this.service.refreshList();
        this.toastr.warning('Delete succsessfully','Payment Detail Register');
      },
        err=>{
          console.log(err);
        })
    }
   
  }
}
