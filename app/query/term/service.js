export default class CategoryService {
  constructor($http) {
    this.$http = $http;
    this.categories = [
      {val: '', desc: '--- Select a category ---'},
      {val: 'acc', desc: 'NCBI Accession'},
      {val: 'assembly', desc: 'NCBI assembly ID'},
      {val: 'type', desc: 'BGC type', category: 'antiSMASH predictions'},
      {val: 'monomer', desc: 'Monomer', category: 'antiSMASH predictions'},
      {val: 'compoundseq', desc: 'Compound sequence', category: 'Compound properties'},
      {val: 'compoundclass', desc: 'RiPP Compound class', category: 'Compound properties'},
      {val: 'profile', desc: 'Biosynthetic profile', category: 'antiSMASH predictions'},
      {val: 'asdomain', desc: 'NRPS/PKS domain', category: 'antiSMASH predictions'},
      {val: 'terpene', desc: 'Terpene synthase type', category: 'antiSMASH predictions'},
      {val: 'terpenefromcarbon', desc: 'Terpene cyclisation from carbon atom', category: 'antiSMASH predictions'},
      {val: 'terpenetocarbon', desc: 'Terpene cyclisation to carbon atom', category: 'antiSMASH predictions'},
      {val: 'smcog', desc: 'smCoG hit', category: 'antiSMASH predictions'},
      {val: 'strain', desc: 'Strain', category: 'Taxonomy'},
      {val: 'species', desc: 'Species', category: 'Taxonomy'},
      {val: 'genus', desc: 'Genus', category: 'Taxonomy'},
      {val: 'family', desc: 'Family', category: 'Taxonomy'},
      {val: 'order', desc: 'Order', category: 'Taxonomy'},
      {val: 'class', desc: 'Class', category: 'Taxonomy'},
      {val: 'phylum', desc: 'Phylum', category: 'Taxonomy'},
      {val: 'superkingdom', desc: 'Superkingdom', category: 'Taxonomy'},
      {val: 'clusterblast', desc: 'ClusterBlast hit', category: 'Similar clusters'},
      {val: 'knowncluster', desc: 'KnownClusterBlast hit', category: 'Similar clusters'},
      {val: 'subcluster', desc: 'SubClusterBlast hit', category: 'Similar clusters'},
    ];
  }

  getTermHints(category, hint) {
    return this.$http.get(`/api/v1.0/available/${category}/${hint}`);
  }
};
