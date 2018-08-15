export default class StatsController {
  constructor($state, StatsService) {
    this.$state = $state;
    this.service = StatsService;

    this.general_stats = {
      'num_clusters': '?',
      'top_secmet_species': '?',
      'top_secmet_taxon': '?',
      'top_secmet_taxon_count': '?',
      'num_genomes': '?',
      'num_sequences': '?',
      'top_seq_taxon': '?',
      'top_seq_taxon_count': '?',
    };
    this.sec_met_clusters = [];

    this.updateStats();
  }

  updateStats() {
    let self = this;
    this.service.getStats().then((response) => {
      self.general_stats = {
        'num_clusters': response.data.num_clusters,
        'top_secmet_species': response.data.top_secmet_species,
        'top_secmet_taxon': response.data.top_secmet_taxon,
        'top_secmet_taxon_count': response.data.top_secmet_taxon_count,
        'top_secmet_assembly_id': response.data.top_secmet_assembly_id,
        'num_genomes': response.data.num_genomes,
        'num_sequences': response.data.num_sequences,
        'top_seq_taxon': response.data.top_seq_taxon,
        'top_seq_taxon_count': response.data.top_seq_taxon_count,
        'top_seq_species': response.data.top_seq_species.replace(/Unclassified/, 'sp.'),
      };
      self.sec_met_clusters = response.data.clusters;
    });
  }

  queryTopSpecies() {
    this.$state.go('query', {search_string: '[taxid]' + this.general_stats.top_seq_taxon});
  }

}
