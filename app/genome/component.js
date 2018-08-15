export default class GenomeController {
  constructor($scope, $window, GenomeService) {
    this.$scope = $scope;
    this.$window = $window;
    this.GenomeService = GenomeService;

    this.currentGenome = null;
    this.pending = false;

    this.$scope.$on("genomeSelected", (event, args) => {
      if (this.currentGenome &&
          this.currentGenome.length > 0 &&
          this.currentGenome[0].acc.toLowerCase() == args.toLowerCase()) {
        return;
      }
      this.loadGenome(args);
    });
  }

  $onInit() {
    if(this.genomeId) {
      this.loadGenome(this.genomeId);
    }
  }

  loadGenome(genome_id) {
    this.pending = true;
    this.currentGenome = null;
    return this.GenomeService.getGenome(genome_id).then((result) => {
      this.pending = false;
      this.currentGenome = result.data;
    });
  }

  showCluster(entry) {
    this.$window.open(`/go/${entry.assembly_id}/${entry.cluster_number}`, '_blank');
  }

  getMibigUrl(accession) {
    if (!accession) {
      return '';
    }
    let [acc, cluster_no, ..._] = accession.split(/_/);
    cluster_no = cluster_no.slice(1);
    return `https://mibig.secondarymetabolites.org/go/${acc}/${cluster_no}`;
  }

  hitQuality(similarity) {
    if (similarity >= 75) {
      return "similarity-high";
    }
    if (similarity >= 50) {
      return "similarity-medium";
    }
    return "similarity-low";
  }
};
