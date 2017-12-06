import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    guardar(){
      let factura = this.get('model');
      
      factura.save().then(()=>{
        Ember.RSVP.all( factura.get('conceptos').invoke('save') ).then(()=>{

          swal(
                'Guardado',
                'Se guardo exitosamente',
                'success'
                ).then(()=>{
                    swal.close();
                    
                    this.transitionToRoute('lista-facturas');
                })
          
        })        
      })
    },
    nuevoConcepto(){
      let concepto = this.store.createRecord('concepto', {
        factura: this.get('model')
      });
    }
  }
});
