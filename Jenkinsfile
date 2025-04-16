pipeline {
    agent any

    stages {
        stage('Maven Build & Test') {
            steps {
                dir('projetCloud') {
                    sh 'mvn clean install'
                }
            }
        }
    }
}


Add initial Jenkinsfile with Maven build
