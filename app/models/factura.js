import DS from 'ember-data';

export default DS.Model.extend({
  fecha: DS.attr('string'), //Debe ser 'date' y ver lo de searilzer
  folio: DS.attr('number'),
  serie: DS.attr('string'),
  formaPago: DS.attr('number'),

  conceptos: DS.hasMany('concepto'),

  subtotal: Ember.computed('conceptos.@each.precio', function(){
    var total = 0;
    this.get('conceptos').forEach(function(concepto) {
      total += Number(concepto.get('precio')*concepto.get('cantidad'));
    });
    return total;
  }),
    total: Ember.computed('conceptos.@each.precio', function(){
      var total = 0;
      this.get('conceptos').forEach(function(concepto) {
        total += Number((concepto.get('precio')*concepto.get('cantidad'))-concepto.get('descuento'));
      });
      return total;
    }),
});
