pipeline {
  agent any
  stages {
    stage('Checkout') {
      steps {
        git(url: 'https://github.com:MatsNord/ng-bowling.git', branch: 'master', credentialsId: 'MatsNord', poll: true)
      }
    }
  }
}
