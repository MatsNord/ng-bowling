pipeline {
  agent any
  stages {
    stage('Source') {
      steps {
        git(url: 'https://github.com/MatsNord/ng-bowling.git', branch: 'master', changelog: true, credentialsId: 'MatsNord', poll: true)
      }
    }
  }
  environment {
    CI = 'true'
  }
}