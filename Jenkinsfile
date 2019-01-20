pipeline {
  agent any
  stages {
    stage('Checkout') {
      agent any
      environment {
        CI = 'true'
      }
      steps {
        git(url: 'https://github.com:MatsNord/ng-bowling.git', branch: 'master', credentialsId: 'MatsNord', poll: true)
      }
    }
  }
  environment {
    CI = 'true'
  }
}