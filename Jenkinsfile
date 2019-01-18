pipeline {
  agent any
  stages {
    stage('Checkout') {
      steps {
        git(url: 'git@github.com:MatsNord/ng-bowling.git', branch: 'master', credentialsId: 'nord.mats@gmail.com')
      }
    }
  }
}