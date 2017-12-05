import DS from 'ember-data';

export default DS.Model.extend({
  descripcion: DS.attr('string'),
  cantidad: DS.attr('number'),
  precio: DS.attr('number'),
  descuento: DS.attr('number'),


  importe: Ember.computed('precio', 'cantidad', function(){
    if( !isNaN(this.get('cantidad')) && !isNaN(this.get('precio')) ){
      return this.get('cantidad') * this.get('precio');
    }
  }),

  total: Ember.computed('importe', 'descuento', function(){
    if( !isNaN(this.get('importe')) && !isNaN(this.get('descuento')) ){
      return this.get('importe') - this.get('descuento');
    }
  }),

  factura: DS.belongsTo('factura'),
});
