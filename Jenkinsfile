pipeline {
  agent any
 
  tools {nodejs "node"}
 
  stages {
    stage('npm check') {
        steps {
            sh 'npm config ls'
        }
    }

    stage('Build') {
        steps {
		    sh "npm install"
		    echo 'NPM Build in progress!'
        }
	}

    stage('serverless') {
        steps {
		//	sh "npm run test"
            sh 'npm install -g serverless'
            sh 'python3 --version'
			echo 'We are testing this!'
        }
	}

	stage('Deploy') {
		steps {
            echo "deployment started"
        	sh "serverless deploy"
			echo "Serverless Deployment Complete!"
		}
    }
  }
}