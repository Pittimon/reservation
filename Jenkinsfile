
pipeline {
    agent {label 'slave01'}

    environment {
        covPath = "/apps/devsecops/coverity/cov-analysis-linux64-2023.9.2/bin"
        covUrl = "https://192.168.172.101:8443/"
        // covUrl = "https://54.179.98.80:8443/"
        cpPath = "/apps/devsecops/checkpoint/shiftleft"
        bdPath = "/apps/devsecops/blackduck/synopsys-detect-9.2.0.jar"
        // bdPath = "/app/blackduck/synopsys-detect-8.6.0.jar"
        bdUrl = "https://192.168.172.102/"
        // bdUrl = "https://18.143.188.111/"
        PmUrl = "https://console-master-s.m.demo.twistlock.com"
        // sigmaPath = "/app/blackduck/sigma"
        envId = "af667c02-7cde-48e2-b834-61947af31072"
        registryName = "Docker Hub"
        scriptPath = "/home/jenkins/defectdojo"
        // reportDir = "/app/aqua"
        covConfig = "/apps/devsecops/coverity/cov-reports-2023.9.2/config"
        covReport = "/apps/devsecops/coverity/cov-reports-2023.9.2/bin"
        Buildnumber = "01"
        twistclipath = '/apps/devsecops/prisma/twistcli'
    }

    stages {
        stage('PrepareCode') {
            steps {
                script {
                    echo "test1234"
                    sh "ls -l"
                }
                    
            }
        }
    }

        


post {
    always {
        // archiveArtifacts artifacts: "*.xlsx, *.pdf", onlyIfSuccessful: true
        deleteDir()
        // script {
        //     sh '''
        //         rm -f ${scriptPath}/*.json
        //     '''
        // }
    }
}

}
