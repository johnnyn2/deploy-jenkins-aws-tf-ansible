<com.cloudbees.jenkins.plugins.sshcredentials.impl.BasicSSHUserPrivateKey plugin="ssh-credentials@1.18.1">
  <scope>GLOBAL</scope>
  <id>JenkinsCreds-{{ ipv4 }}</id>
  <description>Credentials for Workers</description>
  <username>ec2-user</username>
  <privateKeySource class="com.cloudbees.jenkins.plugins.sshcredentials.impl.BasicSSHUserPrivateKey$DirectEntryPrivateKeySource">
    <privateKey>
      {{ priv_key }}
    </privateKey>
  </privateKeySource>
</com.cloudbees.jenkins.plugins.sshcredentials.impl.BasicSSHUserPrivateKey>