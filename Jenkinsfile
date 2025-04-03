pipeline {
    agent any
    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/rajneekant20/birthday-wish.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build React App') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Deploy to Server') {
            steps {
                sh 'sudo cp -r build/* /var/www/html/'
            }
        }
    }
}
